var dialog = dialog || {};
dialog.buy = dialog.buy || {};

dialog.msg = function(title, message) {
    $("#dialog").attr("title", title);
    $("#dialog").html('<p>' + message + '</p>');

    dialog.show();
}

dialog.burn = dialog.burn || {};
dialog.burn.show = function(address) {
    $("#dialog").attr("title", "Burn STEAK!");
    $("#dialog").html('<p>How much STEAK you want to burn?</p><input id="inBurn" type="number" placeholder="Amount" value="0"></input><p><button id="btnBurnSubmit" style="float: right;">BURN</button></p>');

    $("#inBurn").on('input', function(e) {
        if ($("#inBurn").val() < 0) $("#inBurn").val("0");
    });

    $("#btnBurnSubmit").click(function(event) {
        burn($("#inBurn").val())
    });

    dialog.show();
}

dialog.buy.finish = function() {
    $("#dialog").attr("title", "Ether received.");
    $("#dialog").html('<p>Network accepted your transaction. Your purchase is going to be shown in the next minutes.</p>');

    dialog.show();
}

dialog.show = function() {
    if ($("#dialog").hasClass("hidden")) $("#dialog").removeClass("hidden");
    $("#dialog").dialog({
        beforeClose: function(event, ui) {
            if (!$("#dialog").hasClass("hidden")) $("#dialog").addClass("hidden");
        }
    });
}