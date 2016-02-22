/**
 * Created by vytautassugintas on 13/02/16.
 */

var app = angular.module('myApp', ['ngRoute', 'pascalprecht.translate']);

var enTranslations = {
    register: 'Register for consultation',
    contact_header: 'Contact us',
    contact: 'Write us',
    info: 'Registration overview',

    img: '../img/ltFlag.png',
    reg_header: 'Register for consultation online',
    reg_name: 'Name',
    reg_surname: 'Surname',
    reg_phone: 'Phone number',
    reg_email: 'Email',
    reg_department: 'Bank department',
    reg_date: 'Date',
    reg_subject: 'Subject',
    reg_comments: 'Comments',
    reg_submit: 'Submit',
    reg_select: 'Choose',
    reg_send: 'Send',
    info_id: 'id',

    reg_view: 'View',
    reg_del: 'Delete',
    reg_customer: 'Customer',
    reg_action: 'Actions',
    reg_howget: 'How do you like to receive reply?',
    reg_howget1: 'By phone',
    reg_howget2: 'By email',
    reg_howget3: 'By phone and email',
    reg_info: 'Text of message',
    reg_conf: 'Registration confirm',
    reg_thanks: 'Thank you for your interest in our bank services.',
    reg_thanks2: 'If you need instant information, we will be waiting for your calls at 1884, on business days from 8.00 till 20.00 and on Saturdays from 9.00 till 16.00.',
    reg_cancel: 'Cancel',
    reg_question: 'Are you sure you want to delete?',
    reg_delConf: "Confirm",
    reg_viewReg: 'Registration review',
    reg_selectSubject1: 'Saving & Investing',
    reg_selectSubject2: 'Pension & accumulation',
    reg_selectSubject3: 'Life insurance',
    reg_selectSubject4: 'Non life insurance',
    reg_selectSubject5: 'Loans',
    reg_selectSubject6: 'Daily services',


};

var ltTranslations = {
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
    reg_send: 'Siųsti',
    reg_action: 'Veiksmai',
    img: '../img/enFlag.png',
    regconf: 'Registracijos patvirtinimas',
    reg_howget: 'Kaip pageidaujate gauti atsakymą',
    reg_howget1: 'telefonu',
    reg_howget2: 'el. paštu',
    reg_howget3: 'telefonu ir el. paštu',
    reg_conf: 'Registracijos patvirtinimas',
    reg_info: 'žinutės tekstas',
    reg_thanks: 'Ačiū, kad domitės banko paslaugomis.',
    reg_thanks2: 'Jeigu Jums reikalinga skubi informacija, laukiame Jūsų skambučių telefonu 1884, darbo dienomis 8-20val., šeštadieniais 9-16 val.',
    reg_customer: 'Klientas',
    reg_view: 'Peržiūrėti',
    reg_del: 'Trinti',
    reg_cancel: 'Atšaukti',
    reg_question: 'Ar tikrai norite ištrinti?',
    reg_delConf: "Patvirtinimas",
    reg_viewReg: 'Registracijos peržiūra',
    reg_selectSubject1: 'Taupymas ir investavimas',
    reg_selectSubject2: 'Pensijos ir kaupimas',
    reg_selectSubject3: 'Gyvybės draudimas',
    reg_selectSubject4: 'Ne gyvybės draudimas',
    reg_selectSubject5: 'Paskolos, lizingas',
    reg_selectSubject6: 'Kasdieninių finansų valdymas',
};


app.config(['$translateProvider', function ($translateProvider) {
    // add translation table
    $translateProvider
        .translations('en', enTranslations)
        .translations('lt', ltTranslations)
        .preferredLanguage('lt');
}]);

app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/',{
            templateUrl: '../main.html',
            controller: 'MainController'
        })
        .when('/contact-us',{
            templateUrl: '../contact-us.html',
            controller: 'ContactUsController'
        })
        .when('/consultation-registration', {
            templateUrl: '../consultation-registration.html',
            controller: 'ConsultationRegistrationController'
        })
        .when('/registration-list', {
            templateUrl: '../registration-list.html',
            controller: 'RegistrationListController'
        });
    //.otherwise({
    //    redirectTo: '/'
    //});


    //kazkodel neveikia (kad is url panaikintu '#/'
    //$locationProvider.html5Mode(true);
});

app.factory('translateService', ['$translate', function ($translate) {
    return {
        translateFunction: function () {
            if ($translate.use() == "en")
                $translate.use("lt");
            else
                $translate.use("en");
        }
    };
}]);

app.controller("MainController", ['translateService', '$scope', function (translateService, $scope) {

    $scope.translate = function () {
        translateService.translateFunction();
    };

}]);

app.controller("ContactUsController", ['translateService', '$scope', '$http', function (translateService, $scope, $http) {

    $scope.translate = function () {
        translateService.translateFunction();
    };

    $scope.ContactUs = function () {

        var data = $.param({
            subject: $scope.subject,
            message: $scope.message,
            name: $scope.name,
            surname: $scope.surname,
            number: $scope.phone,
            email: $scope.email,
            radioValue: $scope.radioValue
        });

        $http.put('http://betaregistration-kirviai.rhcloud.com/api/ContactUsRegistration?' + data)  // TODO CHANGE URL BEFORE DEPLOYING
            .success(function (data, status, headers) {
                $scope.ServerResponse = data;
            })
            .error(function (data, status, header, config) {
                $scope.ServerResponse = htmlDecode("Data: " + data +
                    "\n\n\n\nstatus: " + status +
                    "\n\n\n\nheaders: " + header +
                    "\n\n\n\nconfig: " + config);
            });
    };
}]);

app.controller("ConsultationRegistrationController", ['translateService', '$scope', '$http', function (translateService, $scope, $http) {

    $scope.translate = function () {
        translateService.translateFunction();
    };

    $scope.Registration = function () {

        var data = $.param({
            name: $scope.name,
            surname: $scope.surname,
            phone: $scope.phone,
            email: $scope.email,
            bank: $scope.bank,
            date: ($scope.date.getDate() + "-" + $scope.date.getMonth() + 1) + "-" + $scope.date.getFullYear(),
            time: ($scope.time.getHours() + ":" + $scope.time.getMinutes()),
            subject: $scope.subject,
            comment: $scope.comment
        });

        modalShow();

        $http.put('http://localhost:8080/api/register?' + data) // TODO FIX
            .success(function (data, status, headers) {
                $scope.ServerResponse = data;
                //    modalShow();
            })
            .error(function (data, status, header, config) {
                $scope.ServerResponse = htmlDecode("Data: " + data +
                    "\n\n\n\nstatus: " + status +
                    "\n\n\n\nheaders: " + header +
                    "\n\n\n\nconfig: " + config);
            });
    };
}]);

//http://localhost:8080/api/searchRegistrationByPhoneNumber?phoneNumber=86924312

app.controller('RegistrationListByPhoneNumberController', function ($scope, $http) {

    var number;

    $scope.GetNumber = function () {
        number = $scope.number;
    };

    $http({
        method: 'GET',
        url: 'http://localhost:8080/api/searchRegistrationByPhoneNumber?phoneNumber=' + number// TODO CHANGE URL BEFORE DEPLOYING
    }).then(function successCallback(response) {
        $scope.registrations = response.data;
        console.log(response);
    }, function errorCallback(response) {
        console.log(response);
    });
});

app.controller('RegistrationListController', ['translateService', '$scope', '$http', function (translateService, $scope, $http) {


    $scope.translate = function () {
        translateService.translateFunction();
    };

    $scope.registrations = [{
        "id": 1,
        "name": "Vytautas",
        "surname": "Sugintas",
        "number": "Antakalnio g. 45",
        "email": "",
        "bank": "Antakalnio g. 45",
        "date": "Fri Feb 26 2016 00:00:00 GMT+0200 (EET)",
        "time": null,
        "subject": "Paskolos, lizingas",
        "comment": "Galiu v?luoti apie 15 minu?i?"
    }, {
        "id": 2,
        "name": "Vygintas",
        "surname": "Starkus",
        "number": "Gedimino pr. 56",
        "email": "",
        "bank": "Gedimino pr. 56",
        "date": "Sat Feb 20 2016 00:00:00 GMT+0200 (EET)",
        "time": null,
        "subject": "Ne gyvyb?s draudimas",
        "comment": "Aruodas"
    }, {
        "id": 3,
        "name": "Martynas",
        "surname": "Labinskas",
        "number": "Ateisties g. 91 (PC „Mandarinas“)",
        "email": "",
        "bank": "Ateisties g. 91 (PC „Mandarinas“)",
        "date": "Thu Feb 18 2016 00:00:00 GMT+0200 (EET)",
        "time": null,
        "subject": "Gyvyb?s draudimas",
        "comment": "Pameciau raktus"
    }, {
        "id": 4,
        "name": "Vytautas",
        "surname": "Sugintas",
        "number": "qq",
        "email": "123",
        "bank": "qq",
        "date": "2015",
        "time": "14.10",
        "subject": "paskola",
        "comment": "cool"
    }, {
        "id": 5,
        "name": "aa",
        "surname": "aa",
        "number": "Ateisties g. 91 (PC „Mandarinas“)",
        "email": "",
        "bank": "Ateisties g. 91 (PC „Mandarinas“)",
        "date": "",
        "time": null,
        "subject": "Pensijos ir kaupimas",
        "comment": "22"
    }]
}]);
