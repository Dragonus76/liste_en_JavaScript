var vBtnAj = document.getElementById("btnAjoute");
vBtnAj.addEventListener("click", recupererDesir);

var vBtnAff = document.getElementById("btnAffiche");
vBtnAff.addEventListener("click", afficherListe);

var maListe = [];
var maZoneListe = document.getElementById("uListe");

function recupererDesir() {
    var vDesir = document.getElementById("jeVeux");

    insererDansListe(vDesir);
    viderChamp(vDesir);
}

function insererDansListe(nouvDesir) {
    maListe.push(nouvDesir.value);
    var nouvEntree = document.createElement("li");
    nouvEntree.innerHTML = maListe[maListe.length - 1];

    maZoneListe.appendChild(nouvEntree);
}

function viderChamp(idChamp) {
    idChamp.value = "";
}

function afficherListe() {
    var vPL = document.getElementById("pageListe");
    var vZF = document.getElementById("zoneFormulaire");

    vZF.style.display = "none";
    vPL.className = "classAff";
    maZoneListe.innerHTML = "";
    maListe.sort();

    for (var i = 0; i < maListe.length; i++) {
        uListe.innerHTML += "<li>" + maListe[i] + "</li>";
    }
    window.print();
}