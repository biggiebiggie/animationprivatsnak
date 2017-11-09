$(window).on("load", sidenErLoadet);

function sidenErLoadet() {
    console.log("siden er loadet");
    $("#billede_container").addClass("druktur_billede");
    $("#billede_container").addClass("fade");
    $("#billede_container").on("click", hehe);
}

function hehe() {
    console.log("fjernet");
    $("#billede_container").removeClass("druktur_billede");
}
