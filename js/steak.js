var screenConnected, screenHelp;
var containerTotal, containerWaitingComplete, containerWaiting, containerAddress, containerBalance;
var linkHelp, linkCloseHelp, linkBurn;
var btnAdd, btnConnect, btnStake, btnClaim;

var intervalClaim;

async function initSteak() {
    screenConnected = $("#screen-connected");
    screenHelp = $("#screen-help");

    containerTotal = $("#container-total");
    containerWaitingComplete = $("#container-waiting-complete");
    containerWaiting = $("#container-waiting");
    containerAddress = $("#container-address");
    containerBalance = $("#container-balance");

    btnAdd = $("#btn-add");
    btnConnect = $("#btn-connect");
    btnStake = $("#btn-stake");
    btnClaim = $("#btn-claim");

    linkHelp = $("#link-help");
    linkCloseHelp = $("#link-close-help");
    linkBurn = $("#link-burn");

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

    linkCloseHelp.on("click", function() {
        screenConnected.show();
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
    } else {
        containerWaitingComplete.hide();
        btnStake.show();
    }

    var total = await steak.methods.totalSupply().call();
    var block = await steak.methods.claimBlock().call();
    intervalClaim = setInterval(async function() {
        // block number of latest mined block
        web3.eth.getBlockNumber().then(data => {
            containerTotal.text(fixDecimals(total) + (data - block));
            containerWaiting.text((data - block) * (balance / total));
        });

    }, 3000);
}

function reloadSteak() {
    clearInterval(intervalClaim);
    containerWaiting.text("0");
    initSteak();
}

async function burn(amount) {
    amount = amount * 1000000000000000000;
    await steak.methods.burn(Web3.utils.toBN(amount)).send({
        from: selectedAccount
    });
}

function fixDecimals(balance) {
    return Math.round(balance / 1000000000000000000);
}