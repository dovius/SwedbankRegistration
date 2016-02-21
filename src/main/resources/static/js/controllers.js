/**
 * Created by vytautassugintas on 13/02/16.
 */

var app = angular.module('myApp', ['ngRoute']);

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


    //kazkodel neveikia (kad is url panaikintu '#/'
    //$locationProvider.html5Mode(true);
});

app.controller("MainController", function($scope){

});

app.controller("ConsultationRegistrationController", function ($scope, $http) {
    $scope.Registration = function () {
        var data = $.param({
            name: $scope.name,
            surname: $scope.surname,
            number: $scope.number,
            email: $scope.email,
            bank: $scope.bank,
            date: $scope.date,
            subject: $scope.subject,
            comment: $scope.comment
        });

        $http.put('http://betaregistration-kirviai.rhcloud.com/api/register?' + data) // TODO FIX
            .success(function (data, status, headers) {
                $scope.ServerResponse = data;
                modalShow();
            })
            .error(function (data, status, header, config) {
                $scope.ServerResponse = htmlDecode("Data: " + data +
                    "\n\n\n\nstatus: " + status +
                    "\n\n\n\nheaders: " + header +
                    "\n\n\n\nconfig: " + config);
            });
    };
});

app.controller('RegistrationListController', function ($scope, $http) {

    $scope.registrations= [{"id":1,"name":"Vytautas","surname":"Sugintas","number":"Antakalnio g. 45","email":"","bank":"Antakalnio g. 45","date":"Fri Feb 26 2016 00:00:00 GMT+0200 (EET)","time":null,"subject":"Paskolos, lizingas","comment":"Galiu v?luoti apie 15 minu?i?"},{"id":2,"name":"Vygintas","surname":"Starkus","number":"Gedimino pr. 56","email":"","bank":"Gedimino pr. 56","date":"Sat Feb 20 2016 00:00:00 GMT+0200 (EET)","time":null,"subject":"Ne gyvyb?s draudimas","comment":"Aruodas"},{"id":3,"name":"Martynas","surname":"Labinskas","number":"Ateisties g. 91 (PC „Mandarinas“)","email":"","bank":"Ateisties g. 91 (PC „Mandarinas“)","date":"Thu Feb 18 2016 00:00:00 GMT+0200 (EET)","time":null,"subject":"Gyvyb?s draudimas","comment":"Pameciau raktus"},{"id":4,"name":"Vytautas","surname":"Sugintas","number":"qq","email":"123","bank":"qq","date":"2015","time":"14.10","subject":"paskola","comment":"cool"},{"id":5,"name":"aa","surname":"aa","number":"Ateisties g. 91 (PC „Mandarinas“)","email":"","bank":"Ateisties g. 91 (PC „Mandarinas“)","date":"","time":null,"subject":"Pensijos ir kaupimas","comment":"22"}];
    /*$http({
        method: 'GET',
        url: 'http://betaregistration-kirviai.rhcloud.com/api/getRegistrationInformation'
    }).then(function successCallback(response) {
        $scope.registrations = response.data;
        console.log(response);
    }, function errorCallback(response) {
        console.log(response);


    });*/
});

app.controller("ContactUsController", function ($scope, $http) {

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

        console.log(data);

        $http.put('http://betaregistration-kirviai.rhcloud.com/api/ContactUsRegistration?' + data)
            .success(function (data, status, headers) {
                $scope.ServerResponse = data;

                //    location.reload();
            })
            .error(function (data, status, header, config) {
                $scope.ServerResponse = htmlDecode("Data: " + data +
                    "\n\n\n\nstatus: " + status +
                    "\n\n\n\nheaders: " + header +
                    "\n\n\n\nconfig: " + config);
            });
    };
});

function modalShow() {
    showNewRegistrationConfirmModal();
    $('#myModal').modal('show');
}

function showNewRegistrationConfirmModal() {
    document.getElementById("modalInputName").innerHTML = document.getElementById("inputName").value;
    document.getElementById("modalInputSurname").innerHTML = document.getElementById("inputSurname").value;
    document.getElementById("modalInputPhone").innerHTML = document.getElementById("inputPhone").value;
    document.getElementById("modalInputEmail").innerHTML = document.getElementById("inputEmail").value;
    document.getElementById("modalInputBank").innerHTML = document.getElementById("inputBank").value;
    document.getElementById("modalInputDate").innerHTML = document.getElementById("inputDate").value;
    document.getElementById("modalInputTheme").innerHTML = document.getElementById("inputSubject").value;
    document.getElementById("modalInputComments").innerHTML = document.getElementById("inputComment").value;
}
