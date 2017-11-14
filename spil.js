$(window).on("load", sidenErLoadet);

var billedeNr = 0;

//var klikket5Billeder = false;


var billede = ["#klasse_billede", "#druk_billede", "#babysitting_billede", "#rejse_billede", "#ferie_billede"];

var hashtag = ["#hashtag_klassebillede", "#hashtag_druk", "#hashtag_babysitting", "#hashtag_toilet", "#hashtag_ferie"];

var ros = ["#ros1", "#ros2", "#ros3", "#ros4", "#ros5"];

var info = ["#info1", "#info2", "#info3", "#info4", "#info5"];



function sidenErLoadet() {
    console.log("siden er loadet - logincycle begynder");

    //    $("#taste_lyd")[0].play();
    $("#loginsprite").removeClass("hidden").addClass("login_cycle");
    $("#baggrund").removeClass("hidden");

    $("#loginsprite").on("animationend", login);
}

function login() {
    console.log("Login aktiv og pulser");

    $("#loginknap").removeClass("hidden").addClass("puls");

    $("#loginknap").on("click", startBillede);
}


//STARTBILLEDE
function startBillede() {
    console.log("startbillede fader ind");

    $("#loginknap").off("click", startBillede);
    $("#loginknap").removeClass("puls").addClass("hidden");
    $("#loginsprite").removeClass("login_cycle").addClass("hidden");

    $("#start_billede").removeClass("hidden").addClass("fade");

    $("#start_billede").on("animationend", startknapFader);
}

function startknapFader() {
    console.log("Startknap fader");

    $("#start_billede").off("animationend", start);
    $("#startknap").removeClass("hidden").addClass("fade");

    $("#startknap").on("animationend", start);

}

function start() {
    console.log("Startknap pulser");

    $("#start_billede").off("animationend", start);

    $("#startknap").removeClass("fade").addClass("puls");

    $("#startknap").on("click", visBillede);
}


// VIS BILLEDE

function visBillede() {
    console.log("Første billede: klassebillede fader ind");



    $("#start_billede").removeClass("fade").addClass("hidden");
    $("#startknap").removeClass("fade").addClass("hidden");

    $("#startknap").off("click", visBillede);

    console.log("billede[billedeNr]:", billede[billedeNr]);
    $(billede[billedeNr]).removeClass("hidden").addClass("fade");
    $(hashtag[billedeNr]).removeClass("hidden").addClass("fade");

    $("#delknap").removeClass("hidden").addClass("fade");
    $("#lukknap").removeClass("hidden").addClass("fade");

    $(billede[billedeNr]).on("animationend", tagValg);
}

// TAG VALG

function tagValg() {
    console.log("knapperne pulser");

    $("#billede[billedeNr]").off("animationend", tagValg);

    //effekter med knapper skal lægges ind

    $("#delknap").removeClass("fade").addClass("puls");
    $("#lukknap").removeClass("fade").addClass("puls");

    $("#delknap").on("click", klikDel);
    $("#lukknap").on("click", klikLuk);

}

//DEL

function klikDel() {
    console.log("Bruger vælger at dele");
    //remove puls

    $("#delknap").removeClass("puls").addClass("hidden");
    $("#lukknap").removeClass("puls").addClass("hidden");

    $(info[billedeNr]).removeClass("hidden").addClass("fade");

    setTimeout(klikIteration, 5000);
}


//DEL IKKE

function klikLuk() {
    console.log("Bruger vælger IKKE at dele");

    $("#delknap").removeClass("puls").addClass("hidden");
    $("#lukknap").removeClass("puls").addClass("hidden");

    $(ros[billedeNr]).removeClass("hidden").addClass("fade");

    setTimeout(klikIteration, 5000);
}



function klikIteration() {
    console.log("itererer");

    $("#delknap").off("click", klikDel);
    $("#lukknap").off("click", klikLuk);
    $(hashtag[billedeNr]).hide();
    $(ros[billedeNr]).hide();
    $(info[billedeNr]).hide();

    billedeNr++;
    visBillede();

    if (billedeNr == 5) {
        resultat();
    }
}



function resultat() {
    console.log("spil færdig");

    $("#payoff").removeClass("hidden");
    $("#payoff").show();
}
