$(window).on("load", sidenErLoadet);

var billedeNr = 0;

//var klikket5Billeder = false;



var billede = ["#klasse_billede", "#druk_billede", "#babysitting_billede", "#toilet_billede", "#ferie_billede"];

var hashtag = ["#hashtag_klassebillede", "#hashtag_druk", "#hashtag_babysitting", "#hashtag_toilet", "#hashtag_ferie"];

var ros = ["#ros1", "#ros2", "#ros3", "#ros4", "#ros5"];

var info = ["#info1", "#info2", "#info3", "#info4", "#info5"];




function sidenErLoadet() {
    console.log("siden er loadet - logincycle begynder");

//    $("#taste_lyd")[0].play();

    $("#lukknap").hide();

    $("#delknap").hide();
    $("#startknap").hide();

    $("#loginsprite").removeClass("hidden");
    $("#loginsprite").addClass("login_cycle");

    $("#loginsprite").on("animationend", login);
}

function login() {
    console.log("Login aktiv og pulser");

    $("#loginsprite").removeClass("login_cycle");

    $("#loginknap").removeClass("hidden");
    $("#loginknap").addClass("puls");

    $("#loginknap").on("click", startBillede);
}


//STARTBILLEDE
function startBillede() {
    console.log("startbillede fader ind med sprite for login");

    $("#loginknap").off("click", startBillede);
    $("#loginknap").removeClass("puls");

    $("#loginsprite").hide();
    $("#loginknap").hide();

    $("#start_billede").removeClass("hidden");
    $("#startknap").removeClass("hidden");

    $("#startknap").show();
    $("#start_billede").addClass("fade");

    $("#startknap").addClass("fade");

    $("#startknap").on("animationend", start);
}

function start() {
    console.log("Start aktiv og pulser");

    $("#startknap").off("animationend", start);
    $("#startknap").removeClass("fade");

    $("#startknap").addClass("puls");
    $("#startknap").on("click", visBillede);
}


// VIS BILLEDE

function visBillede() {
    console.log("Første billede: klassebillede fader ind");

    $("#startknap").hide();

    $("#start_billede").removeClass("fade");
    $("#startknap").removeClass("fade");

    $("#startknap").off("click", visBillede);

    console.log("billede[billedeNr]:", billede[billedeNr]);
    $(billede[billedeNr]).removeClass("hidden");
    $(hashtag[billedeNr]).removeClass("hidden");
    $(billede[billedeNr]).addClass("fade");
    $(hashtag[billedeNr]).addClass("fade");

    $("#delknap").addClass("fade");
    $("#lukknap").addClass("fade");

    $("#klasse_billede").on("animationend", tagValg);
}

// TAG VALG

function tagValg() {
    console.log("knapperne pulser");

    $("#klasse_billede").off("animationend", tagValg);

    //effekter med knapper skal lægges ind

    $("#lukknap").show();
    $("#delknap").show();

    $("#delknap").removeClass("hidden");
    $("#lukknap").removeClass("hidden");
    $("#delknap").addClass("puls");
    $("#lukknap").addClass("puls");

    $("#delknap").on("click", klikDel);
    $("#lukknap").on("click", klikLuk);

}

//DEL

function klikDel() {
    console.log("Bruger vælger at dele");
    //remove puls

    $("#delknap").removeClass("puls");
    $("#lukknap").removeClass("puls");

    $(info[billedeNr]).removeClass("hidden");
    $(info[billedeNr]).addClass("fade");



    setTimeout(klikIteration, 5000);
}


//DEL IKKE

function klikLuk() {
    console.log("Bruger vælger IKKE at dele");

    $("#delknap").removeClass("puls");
    $("#lukknap").removeClass("puls");

    $(ros[billedeNr]).removeClass("hidden");
    $(ros[billedeNr]).addClass("fade");
    //remove puls
    setTimeout(klikIteration, 5000);

}



function klikIteration() {
    console.log("iteraterer");
    $(hashtag[billedeNr]).hide();
    $(ros[billedeNr]).hide();
    $(info[billedeNr]).hide();

    billedeNr++;
    visBillede();
}



function resultat() {}
