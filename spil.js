$(window).on("load", sidenErLoadet);

var billedeNr = 0;

//var klikket5Billeder = false;



var billede = ["#klasse_billede", "#druk_billede", "#babysitting_billede", "#toilet_billede", "#ferie_billede"];

var hashtag = ["#hashtag_klassebillede", "#hashtag_druk", "#hashtag_babysitting", "#hashtag_toilet", "#hashtag_ferie"];

var ros = ["#ros1", "#ros2", "#ros3", "#ros4", "#ros5"];

var info = ["#info1", "#info2", "#info3", "#info4", "#info5"];




function sidenErLoadet() {
    console.log("siden er loadet - logincycle begynder");


	$("#lukknap").hide();
    $("#delknap").hide();

    $("#loginsprite").addClass("login_cycle");

    $("#loginsprite").on("animationend", login);


}

function login() {
	console.log("Login aktiv og pulser");

	$("#loginknap").on("click", visBillede);
	$("#loginknap").addClass("puls");
}


//STARTBILLEDE
function startBillede() {
    console.log("startbillede fader ind med sprite for login");
}


// VIS BILLEDE

function visBillede() {
    console.log("Første billede: klassebillede fader ind");

    $("#loginsprite").removeClass("login_cycle");
    $("#loginsprite").hide();
    $("#loginknap").hide();

    $("#loginknap").off("click", visBillede);

    console.log("billede[billedeNr]:", billede[billedeNr]);
    $(billede[billedeNr]).addClass("fade");
    $(hashtag[billedeNr]).addClass("fade");

    $("#klasse_billede").on("animationend", tagValg);
}

// TAG VALG

function tagValg() {
    console.log("knapperne pulser");

    //$("#klasse_billede").off("animationend", tagValg);

    //effekter med knapper skal lægges ind

    $("#lukknap").show();
    $("#delknap").show();

    $("#delknap").addClass("fade", "puls");
    $("#lukknap").addClass("fade", "puls");

    $("#delknap").on("click", klikDel);
    $("#lukknap").on("click", klikLuk);

}

//DEL

function klikDel() {
    console.log("Bruger vælger at dele");
    //remove puls

    $(info[billedeNr]).addClass("fade");

    setTimeout(klikIteration, 5000);
}


//DEL IKKE

function klikLuk() {
    console.log("Bruger vælger IKKE at dele");

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
