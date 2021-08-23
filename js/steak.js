var screenConnected, screenMarket, screenHelp;
var containerTotal, containerWaitingComplete, containerWaiting, containerAddress, containerBalance, containerMarketTotal, containerExchangeValue;
var linkHelp, btnHome, linkMarket, linkBurn;
var btnAdd, btnConnect, btnStake, btnClaim, btnExchange;
var inBuyingSteak, inBuyingBnb;

var intervalClaim;

var decimals = 1000000000000000000;

async function initSteak() {
    $(document).tooltip();

    screenConnected = $("#screen-connected");
    screenMarket = $("#screen-market");
    screenHelp = $("#screen-help");

    containerTotal = $("#container-total");
    containerWaitingComplete = $("#container-waiting-complete");
    containerWaiting = $("#container-waiting");
    containerAddress = $("#container-address");
    containerBalance = $("#container-balance");
    containerMarketTotal = $("#container-market-total");
    containerExchangeValue = $("#container-exchange-value");

    inBuyingSteak = $("#in-buy-steak");
    inBuyingBnb = $("#in-buy-bnb");

    btnAdd = $("#btn-add");
    btnConnect = $("#btn-connect");
    btnStake = $("#btn-stake");
    btnClaim = $("#btn-claim");
    btnHome = $(".btn-home");
    btnExchange = $("#btn-exchange-go");

    linkHelp = $("#link-help");
    linkMarket = $("#link-market");
    linkBurn = $("#link-burn");

    linkMarket.on("click", function() {
        screenConnected.hide();
        screenMarket.show();
    });

    linkBurn.on("click", function() {
        dialog.burn.show(selectedAccount);
    });

    btnAdd.on("click", function() {
        addToken();
    });

    linkHelp.on("click", function() {
        screenConnected.hide();
        screenHelp.show();
    });

    btnHome.on("click", function() {
        screenConnected.show();
        screenMarket.hide();
        screenHelp.hide();
    });

    containerAddress.text(selectedAccount);

    var balance = await steak.methods.balanceOf(selectedAccount).call();
    containerBalance.text(fixDecimals(balance));

    btnStake.on("click", async function() {
        await steak.methods.stake().send({
            from: selectedAccount
        });
    });

    btnClaim.on("click", async function() {
        await steak.methods.claim().send({
            from: selectedAccount
        });
    });

    var inStaking = await steak.methods.isStaking(selectedAccount).call();
    if (inStaking) {
        containerWaitingComplete.show();
        btnClaim.show();
        btnStake.hide()
    } else {
        containerWaitingComplete.hide();
        btnClaim.hide();
        btnStake.show();
    }

    var total = await steak.methods.totalSupply().call();
    var block = await steak.methods.claimBlock().call();
    intervalClaim = setInterval(async function() {
        // block number of latest mined block
        web3.eth.getBlockNumber().then(data => {
            containerTotal.text(fixDecimals(total));
            containerWaiting.text((data - block) * (balance / total));
        });

        reloadMarketInfo();
    }, 5000);

    loadMarket();
}

function reloadSteak() {
    clearInterval(intervalClaim);
    containerWaiting.text("0");
    initSteak();
}

var marketBalanceSteak;
var exchangeValue;

async function reloadMarketInfo() {
    marketBalanceSteak = await market.methods.getBalanceSTEAK().call();
    containerMarketTotal.text(fixDecimals(marketBalanceSteak));

    exchangeValue = await market.methods.getExchangeValue().call();
    containerExchangeValue.text(exchangeValue);
}

async function loadMarket() {
    await reloadMarketInfo();

    function calcBnb() {
        var bnbValue = inBuyingSteak.val() / exchangeValue;
        if (bnbValue > 0.0000009) inBuyingBnb.val(bnbValue);
        else inBuyingBnb.val("Steak amount to low");
    };

    inBuyingSteak.on("input", function() { calcBnb() });
    inBuyingSteak.val("1000");
    calcBnb();

    btnExchange.on("click", async function() {
        var sendValue = inBuyingBnb.val();
        if (sendValue > 0) {
            await market.methods.exchange().send({
                from: selectedAccount,
                value: Web3.utils.toWei(sendValue, "ether")
            });
            dialog.msg("Purchase successful!", "Your purchase has been successful and your STEAK has been sended!");
        }
    });
}

async function burn(amount) {
    amount = amount * decimals;
    await steak.methods.burn(Web3.utils.toBN(amount)).send({
        from: selectedAccount
    });
}

function fixDecimals(balance) {
    return Math.round(balance / decimals);
}