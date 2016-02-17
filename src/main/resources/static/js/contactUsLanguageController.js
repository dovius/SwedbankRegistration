/**
 * Created by vytautassugintas on 17/02/16.
 */
var selectChose = document.getElementById("selectChose");
var selectSaveAndInvestment = document.getElementById("selectSaveAndInvestment");
var selectPension = document.getElementById("selectPension");
var selectLife = document.getElementById("selectLife");
var selectInsurance = document.getElementById("selectInsurance");
var selectLizing = document.getElementById("selectLizing");
var selectFinance = document.getElementById("selectFinance");

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

var language = localStorage.getItem("LANG");

if(language === "ENG"){
    changeLanguageToEng();
} else{
    changeLanguageToLt();
}

function changeLanguageToEng() {
    header.innerHTML = "Contact Us";
    selectChose.innerHTML = "Choose";
    selectSaveAndInvestment.innerHTML = "Savings and Investments";
    selectPension.innerHTML = "Pensions and Accumulation";
    selectLife.innerHTML = "Life insurance";
    selectInsurance.innerHTML = "Non-life insurance";
    selectLizing.innerHTML = "Loans and leasing";
    selectFinance.innerHTML = "Daily financial management";

    messageText.innerHTML = "Message text";
    textName.innerHTML = "Name";
    textSurname.innerHTML = "Surname";
    textPhone.innerHTML = "Phone Number";
    textEmail.innerHTML = "Email";
    textAnswer.innerHTML = "How do you like to receive an answer";

    radioBoth.innerHTML = '<input type="radio" name="test" ng-model="radioValue" value="Both"/>' + "Both";
    radioEmail.innerHTML = '<input type="radio" name="test" ng-model="radioValue" value="Email"/>' + "Email";
    radioPhone.innerHTML = '<input type="radio" name="test" ng-model="radioValue" value="Phone"/>' + "Phone";

    buttonSubmit.innerHTML = "Submit";
}

function changeLanguageToLt(){
    header.innerHTML = "Parašykite mums";
    selectChose.innerHTML = "Pasirinkite";
    selectSaveAndInvestment.innerHTML = "Taupymas ir investavimas";
    selectPension.innerHTML = "Pensijos ir kaupimas";
    selectLife.innerHTML = "Gyvybės draudimas";
    selectInsurance.innerHTML = "Ne gyvybės draudimas";
    selectLizing.innerHTML = "Paskolos, lizingas";
    selectFinance.innerHTML = "Kasdieninių finansų valdymas";

    messageText.innerHTML = "Žinutės tekstas";
    textName.innerHTML = "Vardas";
    textSurname.innerHTML = "Pavardė";
    textPhone.innerHTML = "Telefono numeris";
    textEmail.innerHTML = "Elektroninis paštas";
    textAnswer.innerHTML = "Kaip pageidaujate gauti atsakymą";

    radioBoth.innerHTML = '<input type="radio" name="test" ng-model="radioValue" value="Both"/>' + "Both";
    radioEmail.innerHTML = '<input type="radio" name="test" ng-model="radioValue" value="Email"/>' + "Email";
    radioPhone.innerHTML = '<input type="radio" name="test" ng-model="radioValue" value="Phone"/>' + "Phone";

    buttonSubmit.innerHTML = "Siųsti";
}