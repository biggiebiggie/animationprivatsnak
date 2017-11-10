$(window).on("load", sidenErLoadet);

var antalKlik = 0;
var klikket5Billeder = false;



function sidenErLoadet() {
    console.log("siden er loadet - startbillede fader ind");
    $("#start_billede").addClass("fade");

    $("#loginknap").on("click", foersteBillede);
}

// FØRSTE BILLEDE

function foersteBillede() {
    console.log("Første billede: klassebillede fader ind");

    $("#loginknap").off("click", foersteBillede);

    $("#start_billede").removeClass("fade");

    $("#klasse_billede").addClass("fade");
    //effekter med knapper skal lægges ind

    $("#klasse_billede").on("animationend", tagValg);
}

function tagValg() {
    console.log("knapperne pulser");

    $("#klasse_billede").off("animationend", tagValg);
}

function klikDel1() {
    console.log("Bruger vælger at dele 1");

    $("#klasse_billede").removeClass("fade");
    //remove puls

    $("#info1").addClass("fade");

    //hvordan skal vi videre herfra? bare on animationend eller skal vi have en knap?
}

function klikKryds1() {
    console.log("Bruger vælger IKKE at dele 1");

    $("#klasse_billede").removeClass("fade");
    //remove puls

    $("#ros1").addClass("fade");

    //hvordan skal vi videre herfra? bare on animationend eller skal vi have en knap?
}

// ANDET BILLEDE


function andetBillede() {
    console.log("Andet billede: druktursbillede fader ind");

    $("#klasse_billede").removeClass("fade");

    $("#druktur_billede").addClass("fade");

    $("druktur_billede").on("animationend", tagValg);
}

function klikDel2() {
    console.log("Bruger vælger at dele 2");
}

function klikKryds2() {
    console.log("Bruger vælger IKKE at dele 2");
}


//TREDJE BILLEDE

function tredjeBillede() {
    console.log("Tredje billede: babysitting-billede fader ind");
    $("#babysitting_billede").on("animationend", tagValg);
}

function klikDel3() {
    console.log("Bruger vælger at dele 3");
}

function klikKryds3() {
    console.log("Bruger vælger IKKE at dele 3");
}


//FJERDE BILLEDE

function fjerdeBillede() {
    console.log("Fjerde billede: toilet-billede fader ind");
}

function klikDel4() {
    console.log("Bruger vælger at dele 4");
}

function klikKryds4() {
    console.log("Bruger vælger IKKE at dele 4");
}


//FEMTE BILLEDE

function femteBillede() {
    console.log("Femte billede: rejse-billede fader ind");
}

function klikDel5() {
    console.log("Bruger vælger at dele 5");
}

function klikKryds5() {
    console.log("Bruger vælger IKKE at dele 5");
}


//RESULTAT

function resultat() {}


//sekvensdiagram skal opdateres med tællere og flag + navne
