/**
 * Created by vytautassugintas on 17/02/16.
 */
var language = localStorage.getItem("LANG");

var header = document.getElementById("headerContactUs")
var contactUs = document.getElementById("txtRegistration");
var writeUs = document.getElementById("txtWriteUs");
var registrationInformation = document.getElementById("txtRegistrationInformation");
var liLT = document.getElementById("navLT");
var liEN = document.getElementById("navEN");

if(language === "ENG"){
    changeToEng();
} else{
    changeToLt();
}

function changeToEng(){
    header.innerHTML = "Contact Us";
    contactUs.innerHTML = "Register for consultation";
    writeUs.innerHTML = "Write us";
    registrationInformation.innerHTML = "Registration overview";
    localStorage.setItem("LANG", "ENG");
    liEN.className = "activeNav";
    liLT.className = "";
}

function changeToLt(){
    header.innerHTML = "Susisiekite su mumis";
    contactUs.innerHTML = "Registruokitės konsultacijai internetu";
    writeUs.innerHTML = "Parašykite mums";
    registrationInformation.innerHTML = "Registracijų peržiūra";
    liEN.className = "";
    liLT.className = "activeNav";
    localStorage.setItem("LANG", "LT");
}