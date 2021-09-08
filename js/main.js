var screenConnected, screenGames, screenMarket, screenHelp;
var gameLottery;
var containerTotal, containerWaitingComplete, containerWaiting, containerAddress, containerBalance, containerMarketTotal, containerExchangeValue;
var linkHelp, btnHome, linkMarket, linkBurn, linkGamesLottery;
var btnAdd, btnConnect, btnClaim, btnExchange;
var inBuyingSteak, inBuyingBnb;
var loading;

var intervalClaim;

var decimals = 1000000000000000000;

function initSteak() {
    $(document).tooltip();
    loadSteak();
    loadMarket();
    loadLottery();
}

async function loadSteak() {
    loading = $("#loading");

    screenConnected = $("#screen-connected");
    screenGames = $("#screen-games");
    screenMarket = $("#screen-market");
    screenHelp = $("#screen-help");

    gameLottery = $("#game-lottery");

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
    btnClaim = $("#btn-claim");
    btnHome = $(".btn-home");
    btnExchange = $("#btn-exchange-go");

    linkHelp = $("#link-help");
    linkMarket = $("#link-market");
    linkBurn = $("#link-burn");
    linkGamesLottery = $("#link-games-lottery");

    linkGamesLottery.on("click", function() {
        hideAll();
        screenGames.show();
        gameLottery.show();
    });

    linkMarket.on("click", function() {
        hideAll();
        screenMarket.show();
    });

    linkBurn.on("click", function() {
        dialog.burn.show(selectedAccount);
    });

    btnAdd.on("click", function() {
        addToken();
    });

    linkHelp.on("click", function() {
        hideAll();
        screenHelp.show();
    });

    btnHome.on("click", function() {
        hideAll();
        screenConnected.show();
    });

    containerAddress.text(selectedAccount);

    var balance = await steak.methods.balanceOf(selectedAccount).call();
    containerBalance.text(fixDecimals(balance));

    btnClaim.on("click", async function() {
        try {
            loading.show();
            await steak.methods.claim().send({
                from: selectedAccount
            });
            loading.hide();
        } catch (e) {
            loading.hide();
        }
    });

    containerWaitingComplete.show();
    btnClaim.show();


    var total = await steak.methods.totalSupply().call();
    var block = await steak.methods.claimBlock().call();
    intervalClaim = setInterval(async function() {
        // block number of latest mined block
        web3.eth.getBlockNumber().then(data => {
            containerTotal.text(fixDecimals(total) + (data - block));
            containerWaiting.text((data - block) * (balance / total));
        });

        reloadMarketInfo();
    }, 5000);
}

function hideAll() {
    screenConnected.hide();
    screenGames.hide();
    screenMarket.hide();
    screenHelp.hide();
}

function reloadSteak() {
    clearInterval(intervalClaim);
    containerWaiting.text("0");
    loadSteak();
}

var marketBalanceSteak;
var exchangeValue;

async function reloadMarketInfo() {
    marketBalanceSteak = await market.methods.getBalanceSTEAK().call();
    containerMarketTotal.text(fixDecimals(marketBalanceSteak));

    exchangeValue = await market.methods.getExchangeValue().call();
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
        try {
            var sendValue = inBuyingBnb.val();
            if (sendValue > 0) {
                loading.show();
                await market.methods.exchange().send({
                    from: selectedAccount,
                    value: Web3.utils.toWei(sendValue, "ether")
                });
                loading.hide();
                dialog.msg("Purchase successful!", "Your purchase has been successful and your STEAK has been sended!");
            }
        } catch (e) {
            loading.hide();
        }
    });
}

async function burn(amount) {
    try {
        loading.show();
        amount = toBaseUnit(amount, 18, web3.utils.BN);
        loading.show();
        await steak.methods.burn(amount).send({
            from: selectedAccount
        });
        loading.hide();
    } catch (e) {
        loading.hide();
    }
}

function fixDecimals(balance) {
    return Math.round(((balance / decimals) + Number.EPSILON) * 100000) / 100000;
}