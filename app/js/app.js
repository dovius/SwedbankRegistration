var angular = require("angular");

/* App Module */

var app = angular.module('app', [
  require('angular-route'),
  require('angular-translate'),
  require('angular-ui-bootstrap'),
  'appControllers',
]);

app.config(['$routeProvider', '$locationProvider', '$translateProvider',
    function($routeProvider, $locationProvider, $translateProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/menu.html',
                controller: 'MenuCtrl'
            }).
            when('/register', {
                templateUrl: 'partials/register.html',
                controller: 'RegistrationCtrl'
            }).
            when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'ContactCtrl'
            }).
            when('/info', {
                templateUrl: 'partials/info.html',
                controller: 'RegistrationListCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);

        $translateProvider.translations('en', {
            register: 'Register for consultation',
            contact_header: 'Contact us',
            contact: 'Write us',
            info: 'Registration overview',
            reg_header: 'Register for consultation online',
            reg_name: 'Name',
            reg_surname: 'Surname',
            reg_phone: 'Phone number',
            reg_email: 'Email',
            reg_department: 'Banko department',
            reg_date: 'Date',
            reg_subject: 'Subject',
            reg_comments: 'Comments',
            reg_submit: 'Submit',
            reg_select: 'Choose',
            reg_send: 'Send',
            info_id: 'id',
        })
        .translations('lt', {
            register: 'Registruokitės konsultacijai internetu',
            contact_header: 'Susisiekite su mumis',
            contact: 'Parašykite mums',
            info: 'Registracijų peržiūra',
            reg_header: 'Registruokitės konsultacijai internetu',
            reg_name: 'Vardas',
            reg_surname: 'Pavardė',
            reg_phone: 'Telefono numeris',
            reg_email: 'El. paštas',
            reg_department: 'Banko skyrius',
            reg_date: 'Data',
            reg_subject: 'Tema',
            reg_comments: 'Komentarai, pastebėjimai',
            reg_submit: 'Patvirtinti',
            reg_select: 'Pasirinkite',
            reg_send: 'Siųsti'
        });

        $translateProvider.preferredLanguage('en');

    }]);


module.exports = app;


/**

var optionsEN = ["Choose", "Savings and Investments", "Pensions and Accumulation", "Life insurance",
    "Non-life insurance", "Loans and leasing", "Daily financial management"];
var optionsLT = ["Pasirinkite", "Taupymas ir investavimas", "Pensijos ir kaupimas", "Gyvybės draudimas",
    "Ne gyvybės draudimas", "Paskolos, lizingas", "Kasdieninių finansų valdymas"];


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

*/