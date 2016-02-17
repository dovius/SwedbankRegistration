/**
 * Created by vytautassugintas on 17/02/16.
 */
var language = localStorage.getItem("LANG");

if(language === "ENG"){
    changeToEng();
} else{
    changeToLt();
}

function changeToEng(){
    var header = document.getElementById("headerContactUs");
    var contactUs = document.getElementById("txtRegistration");
    var writeUs = document.getElementById("txtWriteUs");
    var registrationInformation = document.getElementById("txtRegistrationInformation");

    header.innerHTML = "Contact Us";
    contactUs.innerHTML = "Register for consultation";
    writeUs.innerHTML = "Write us";
    registrationInformation.innerHTML = "Registration information";

    localStorage.setItem("LANG", "ENG");
}

function changeToLt(){
    var header = document.getElementById("headerContactUs")
    var contactUs = document.getElementById("txtRegistration");
    var writeUs = document.getElementById("txtWriteUs");
    var registrationInformation = document.getElementById("txtRegistrationInformation");

    header.innerHTML = "Susisiekite su mumis";
    contactUs.innerHTML = "Registruokitės konsultacijai internetu";
    writeUs.innerHTML = "Parašykite mums";
    registrationInformation.innerHTML = "Registracijų informacija";

    localStorage.setItem("LANG", "LT");
}