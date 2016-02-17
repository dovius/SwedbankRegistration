/**
 * Created by vytautassugintas on 17/02/16.
 */
var inputSubject = document.getElementById("subject");
var messageText = document.getElementById("messageText");
var textName = document.getElementById("textName");
var textSurname = document.getElementById("textSurname");
var textPhone = document.getElementById("textPhone");
var textEmail = document.getElementById("textEmail");
var textAnswer = document.getElementById("textAnswer");
var radioPhone = document.getElementById("radioPhone");
var radioEmail = document.getElementById("radioEmail");
var radioBoth = document.getElementById("radioBoth");
var buttonSubmit = document.getElementById("submitButton");
var header = document.getElementById("header");

var optionsEN = ["Choose", "Savings and Investments", "Pensions and Accumulation", "Life insurance",
    "Non-life insurance", "Loans and leasing", "Daily financial management"];
var optionsLT = ["Pasirinkite", "Taupymas ir investavimas", "Pensijos ir kaupimas", "Gyvybės draudimas",
    "Ne gyvybės draudimas", "Paskolos, lizingas", "Kasdieninių finansų valdymas"];

var liLT = document.getElementById("navLT");
var liEN = document.getElementById("navEN");

var language = localStorage.getItem("LANG");
if (language === "ENG") {
    changeLanguageToEng();
} else {
    changeLanguageToLt();
}

function changeLanguageToEng() {
    header.innerHTML = "Contact Us";
    inputSubject.innerHTML = "Subject";
    messageText.innerHTML = "Text";
    textName.innerHTML = "Name";
    textSurname.innerHTML = "Surname";
    textPhone.innerHTML = "Phone Number";
    textEmail.innerHTML = "Email";
    textAnswer.innerHTML = "How do you like to receive an answer";
    buttonSubmit.innerHTML = "Submit";
    radioEmail.innerHTML = '<input type="radio" name="test" ng-model="radioValue" value=" email"/>' + " email";
    radioPhone.innerHTML = '<input type="radio" name="test" ng-model="radioValue" value=" phone"/>' + " phone";
    radioBoth.innerHTML = '<input type="radio" name="test" ng-model="radioValue" value=" both"/>' + " phone and email";
    addOptionsToSelect(optionsEN);
    setActiveLang("ENG");
}

function changeLanguageToLt() {
    header.innerHTML = "Parašykite mums";
    inputSubject.innerHTML = "Tema";
    messageText.innerHTML = "Žinutės tekstas";
    textName.innerHTML = "Vardas";
    textSurname.innerHTML = "Pavardė";
    textPhone.innerHTML = "Telefono numeris";
    textEmail.innerHTML = "Elektroninis paštas";
    textAnswer.innerHTML = "Kaip pageidaujate gauti atsakymą";
    buttonSubmit.innerHTML = "Siųsti";
    radioEmail.innerHTML = '<input type="radio" name="test" ng-model="radioValue" value="el. paštu"/>' + " el. paštu";
    radioPhone.innerHTML = '<input type="radio" name="test" ng-model="radioValue" value="telefonu"/>' + " telefonu";
    radioBoth.innerHTML = '<input type="radio" name="test" ng-model="radioValue" value="telefonu ir el.paštu"/>' + " telefonu ir el.paštu";
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