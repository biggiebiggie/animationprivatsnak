$(window).on("load", sidenErLoadet);

var billedeNr = 0;

var billede = ["#klasse_billede", "#druk_billede", "#rejse_billede", "#babysitting_billede", "#ferie_billede"];

var hashtag = ["#hashtag_klassebillede", "#hashtag_druk", "#hashtag_rejse", "#hashtag_babysitting", "#hashtag_ferie"];

var ros = ["#ros1", "#ros2", "#ros3", "#ros4", "#ros5"];

var info = ["#info1", "#info2", "#info3", "#info4", "#info5"];



function sidenErLoadet() {
    console.log("startbillede fader ind");

    $("#temasang")[0].play();
    $("#temasang")[0].volume = 0;
    $("#temasang")[0].loop = true;
    $("#temasang").animate({
        volume: 0.3
    }, 1000);

    $("#baggrund").removeClass("hidden");

    $("#start_billede").removeClass("hidden");

    setTimeout(startknapFader, 1000);

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

    $("#startknap").on("click", loginBillede);
}

//LOGINBILLEDE
function loginBillede() {
    console.log("loginbillede fader ind");

    $("#kliklyd")[0].play();
    $("#kliklyd")[0].volume = 0.4;

    $("#startknap").off("click", loginBillede);

    $("#start_billede").removeClass("fade").addClass("hidden");
    $("#startknap").removeClass("fade").addClass("hidden");

    $("#tastelyd")[0].play();

    $("#loginsprite").removeClass("hidden").addClass("login_cycle");

    $("#loginsprite").on("animationend", login);
}


function login() {
    console.log("Login aktiv og pulser");

    $("#loginsprite").off("animationend", login);

    $("#loginknap").removeClass("hidden").addClass("puls");

    $("#loginknap").on("click", visBillede);

}




// VIS BILLEDE

function visBillede() {
    console.log("Første billede: klassebillede fader ind");

    $("#kliklyd")[0].play();
    $("#kliklyd")[0].volume = 0.4;

    $("#loginknap").off("click", visBillede);

    $("#loginknap").removeClass("puls").addClass("hidden");
    $("#loginsprite").removeClass("login_cycle").addClass("hidden");


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

    $("#delknap").removeClass("fade").addClass("puls");
    $("#lukknap").removeClass("fade").addClass("puls");

    $("#delknap").on("click", klikLydDel);
    $("#lukknap").on("click", klikLydLuk);

}

function klikLydDel() {
    $("#delknap").off("click", klikLydDel);
    $("#lukknap").off("click", klikLydLuk);

    $("#kliklyd")[0].play();
    $("#kliklyd")[0].volume = 0.4;

    setTimeout(klikDel, 500);
}

function klikLydLuk() {
    $("#delknap").off("click", klikLydDel);
    $("#lukknap").off("click", klikLydLuk);

    $("#kliklyd")[0].play();
    $("#kliklyd")[0].volume = 0.4;

    setTimeout(klikLuk, 500);
}

//DEL

function klikDel() {
    console.log("Bruger vælger at dele");

    $("#delknap").removeClass("puls").addClass("hidden");
    $("#lukknap").removeClass("puls").addClass("hidden");


    $(info[billedeNr]).removeClass("hidden").addClass("fade");

    $("#forkertlyd")[0].play();
    $("#forkertlyd")[0].volume = 0.4;


    setTimeout(okknapFader, 1500);
}


//DEL IKKE

function klikLuk() {
    console.log("Bruger vælger IKKE at dele");

    $("#delknap").removeClass("puls").addClass("hidden");
    $("#lukknap").removeClass("puls").addClass("hidden");

    $(ros[billedeNr]).removeClass("hidden").addClass("fade");

    $("#korrektlyd")[0].play();
    $("#korrektlyd")[0].volume = 0.4;

    setTimeout(okknapFader, 1500);
}

function okknapFader() {
    $("#okknap").removeClass("hidden").addClass("fade");

    $("#okknap").on("click", klikIteration);

}


function klikIteration() {
    console.log("itererer");
    $("#kliklyd")[0].play();
    $("#kliklyd")[0].volume = 0.4;

    $("#okknap").off("click", klikIteration);
    $("#okknap").removeClass("fade").addClass("hidden");
    $(hashtag[billedeNr]).hide();
    $(ros[billedeNr]).hide();
    $(info[billedeNr]).hide();

    billedeNr++;


    if (billedeNr == 5) {
        resultat();
    } else {
        visBillede();
    }

}

function resultat() {
    console.log("spillet er færdig");

    $("#delknap").removeClass("puls").addClass("hidden");
    $("#lukknap").removeClass("puls").addClass("hidden");

    $("#payoff").removeClass("hidden").addClass("fade");
}
