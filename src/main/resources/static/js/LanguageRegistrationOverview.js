
var inputSubject = document.getElementById("subject");
var textName = document.getElementById("textName");
var textSurname = document.getElementById("textSurname");
var textBank = document.getElementById("textBank");

var liLT = document.getElementById("navLT");
var liEN = document.getElementById("navEN");

var language = localStorage.getItem("LANG");
if (language === "ENG") {
    changeLanguageToEng();
} else {
    changeLanguageToLt();
}

function changeLanguageToEng() {
    inputSubject.innerHTML = "Subject";
    textName.innerHTML = "Name";
    textSurname.innerHTML = "Surname";
    textBank.innerHTML = "Bank";
    addOptionsToSelect(optionsEN);
    setActiveLang("ENG");
}

function changeLanguageToLt() {
    inputSubject.innerHTML = "Tema";
    textName.innerHTML = "Vardas";
    textSurname.innerHTML = "Pavardė";
    textBank.innerHTML = "Bankas";
    addOptionsToSelect(optionsLT);
    setActiveLang("LT");
}

function setActiveLang(lang){
    if (lang === "ENG"){
        localStorage.setItem("LANG", "ENG");
        liEN.className = "activeNav";
        liLT.className = "";
    }else if (lang === "LT"){
        localStorage.setItem("LANG", "LT");
        liEN.className = "";
        liLT.className = "activeNav";
    }
}

function addOptionsToSelect(optionsLang) {
    var select = document.getElementById("inputSubject");
    $("#inputSubject").empty();
    for (var i = 0; i < optionsLang.length; i++) {
        var opt = document.createElement("option");
        opt.text = optionsLang[i];
        select.options.add(opt, 1);
    }
}