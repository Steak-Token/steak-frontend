var containerLastWinner, containerLastPrice, containerLotteryRound, containerLotteryPlayers, containerLotteryPrice, containerLotteryParticipate, containerLotteryPlayerInfo, containerLotteryPlayerName, containerLotteryTickets, containerNoPlayer;
var btnLotteryApprove, btnLotteryParticipate, btnLotteryClaim;
var inPlayerName;

var isRoundOver, lastWinner, lastPrice, round, roundEndIn, players, price, approved, participate, playerInfo;

async function loadLottery() {
    containerLastWinner = $("#games-lottery-lastwinner");
    containerLastPrice = $("#games-lottery-lastprice");
    containerLotteryRound = $("#games-lottery-round");
    containerLotteryRoundEndsIn = $("#games-lottery-endsin");
    containerLotteryPlayers = $("#games-lottery-players");
    containerLotteryPrice = $("#games-lottery-price");
    containerLotteryParticipate = $("#games-lottery-participate");
    containerLotteryPlayerInfo = $("#container-lottery-playerinfo");
    containerLotteryPlayerName = $("#container-lottery-playername");
    containerLotteryTickets = $("#container-lottery-tickets");
    containerNoPlayer = $("#lottery-noplayer");

    btnLotteryApprove = $("#btn-games-lottery-approve");
    btnLotteryParticipate = $("#btn-games-lottery-participate");
    btnLotteryClaim = $("#btn-games-lottery-claim");

    inPlayerName = $("#in-games-lottery-playername");

    await reloadOutput();

    btnLotteryApprove.on("click", function() {
        lotteryApprove();
    });

    btnLotteryParticipate.on("click", function() {
        lotteryParticipate();
    });

    btnLotteryClaim.on("click", function() {
        lotteryClaim();
    });

    setInterval(function() {
        reloadOutput();
    }, 5000);
}

async function reloadOutput() {
    approved = await steak.methods.allowance(selectedAccount, addressLottery).call();
    isRoundOver = await lottery.methods.isRoundOver().call();
    players = await lottery.methods.getPlayers().call();
    containerLotteryPlayers.text(players.length);

    if (isRoundOver) {
        if (players.length == 0) {
            btnLotteryClaim.hide();
            containerNoPlayer.show();
            if (approved >= participate) {
                btnLotteryApprove.hide();
                btnLotteryParticipate.show();
                inPlayerName.show();
            } else {
                btnLotteryApprove.show();
                btnLotteryParticipate.hide();
                inPlayerName.hide();
            }
        } else {
            containerNoPlayer.hide();
            btnLotteryClaim.show();
            btnLotteryApprove.hide();
            btnLotteryParticipate.hide();
            inPlayerName.hide();
        }
    } else {
        containerNoPlayer.hide()
        btnLotteryClaim.hide();
        if (approved >= participate) {
            btnLotteryApprove.hide();
            btnLotteryParticipate.show();
            inPlayerName.show();
        } else {
            btnLotteryApprove.show();
            btnLotteryParticipate.hide();
            inPlayerName.hide();
        }
    }

    var startBlock = await lottery.methods.startBlock().call()
    var roundLength = await lottery.methods.roundLength().call()
    web3.eth.getBlockNumber().then(data => {
        var roundEndIn = roundLength - (data - startBlock);
        var roundEndText = "Round ends in: " + roundEndIn + " Blocks";
        if (roundEndIn <= 0) {
            roundEndText = "Round ended: Check winner to start new round!";
        }
        containerLotteryRoundEndsIn.text(roundEndText);
    });

    playerInfo = await lottery.methods.getPlayer(selectedAccount).call();
    if (playerInfo[1] == "0") {
        containerLotteryPlayerInfo.hide();
    } else {
        containerLotteryPlayerInfo.show();
        containerLotteryPlayerName.text(playerInfo[0]);
        containerLotteryTickets.text(playerInfo[1]);
    }

    lastWinner = await lottery.methods.lastWinner().call();
    containerLastWinner.text(lastWinner);

    lastPrice = await lottery.methods.lastPrice().call();
    containerLastPrice.text(fixDecimals(lastPrice));

    round = await lottery.methods.round().call();
    containerLotteryRound.text(round);

    price = await lottery.methods.getWinningPrice().call();
    containerLotteryPrice.text(fixDecimals(price));

    participate = await lottery.methods.steakToParticipate().call();
    containerLotteryParticipate.text(fixDecimals(participate));
}

async function lotteryApprove() {
    try {
        loading.show();
        await steak.methods.approve(addressLottery, participate).send({
            from: selectedAccount
        });
        loading.hide();
    } catch (e) {
        loading.hide();
    }
}

async function lotteryParticipate() {
    try {
        loading.show();
        var name = inPlayerName.val();
        await lottery.methods.participate(name).send({
            from: selectedAccount
        });
        loading.hide();
    } catch (e) {
        loading.hide();
    }
}

async function lotteryClaim() {
    try {
        loading.show();
        await lottery.methods.declareWinner().send({
            from: selectedAccount
        });
        loading.hide();
    } catch (e) {
        loading.hide();
    }
}