$(window).on("load", sidenErLoadet);

var billedeNr = 0;
var klikket5Billeder = false;



var billede = ["#klasse_billede", "#druk_billede", "#babysitting_billede", "#toilet_billede", "#ferie_billede"];

var ros = ["#ros1", "#ros2", "#ros3", "#ros4", "#ros5"];

var info = ["#info1", "#info2", "#info3", "#info4", "#info5"];




function sidenErLoadet() {
    console.log("siden er loadet - startbillede fader ind");
    $("#start_billede").addClass("fade");

    $("#loginknap").on("click", visBillede);
}


//STARTBILLEDE
console.log("startbillede fader ind med sprite for login");



// VIS BILLEDE

function visBillede() {
    console.log("Første billede: klassebillede fader ind");

    $("#loginknap").off("click", visBillede);

    console.log("billede[billedeNr]:", billede[billedeNr]);
    $(billede[billedeNr]).addClass("fade");
    //effekter med knapper skal lægges ind

    $("#klasse_billede").on("animationend", tagValg);


}

// TAG VALG

function tagValg() {
    console.log("knapperne pulser");

    //$("#klasse_billede").off("animationend", tagValg);

    $("#delknap").on("click", klikDel);
    $("#lukknap").on("click", klikLuk);

}

//DEL

function klikDel() {
    console.log("Bruger vælger at dele");

    $(billede[billedeNr]).removeClass("fade");
    //remove puls

    $("#info1").addClass("fade");

    //hvordan skal vi videre herfra? bare on animationend eller skal vi have en knap?
    billedeNr++;
    visBillede();
}

//DEL IKKE

function klikLuk() {
    console.log("Bruger vælger IKKE at dele");

    $(billede[billedeNr]).removeClass("fade");
    //remove puls

    $("#ros1").addClass("fade");

    //hvordan skal vi videre herfra? bare on animationend eller skal vi have en knap?
    billedeNr++;
    visBillede();
}

//// ANDET BILLEDE
//
//
//function andetBillede() {
//    console.log("Andet billede: druktursbillede fader ind");
//
//    $("#klasse_billede").removeClass("fade");
//
//    $("#druktur_billede").addClass("fade");
//
//    $("druktur_billede").on("animationend", tagValg);
//}
//
//function klikDel2() {
//    console.log("Bruger vælger at dele 2");
//}
//
//function klikKryds2() {
//    console.log("Bruger vælger IKKE at dele 2");
//}
//
//
////TREDJE BILLEDE
//
//function tredjeBillede() {
//    console.log("Tredje billede: babysitting-billede fader ind");
//    $("#babysitting_billede").on("animationend", tagValg);
//}
//
//function klikDel3() {
//    console.log("Bruger vælger at dele 3");
//}
//
//function klikKryds3() {
//    console.log("Bruger vælger IKKE at dele 3");
//}
//
//
////FJERDE BILLEDE
//
//function fjerdeBillede() {
//    console.log("Fjerde billede: toilet-billede fader ind");
//}
//
//function klikDel4() {
//    console.log("Bruger vælger at dele 4");
//}
//
//function klikKryds4() {
//    console.log("Bruger vælger IKKE at dele 4");
//}
//
//
////FEMTE BILLEDE
//
//function femteBillede() {
//    console.log("Femte billede: rejse-billede fader ind");
//}
//
//function klikDel5() {
//    console.log("Bruger vælger at dele 5");
//}
//
//function klikKryds5() {
//    console.log("Bruger vælger IKKE at dele 5");
//}


//RESULTAT

function resultat() {}


//sekvensdiagram skal opdateres med tællere og flag + navne
