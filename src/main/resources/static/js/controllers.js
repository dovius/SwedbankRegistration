/**
 * Created by vytautassugintas on 13/02/16.
 */

var app = angular.module('myApp', []);

app.controller("RegistrationController", function ($scope, $http) {
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

        console.log(data);

        $http.put('http://localhost:8080/api/register?' + data)
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

app.controller('RegistrationListController', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://localhost:8080/api/getRegistrationInformation'
    }).then(function successCallback(response) {
        $scope.registrations = response.data;
        console.log(response);
    }, function errorCallback(response) {

    });
});

app.controller("ContactUsController", function ($scope, $http) {
    $scope.ContactUs = function () {
        var data = $.param({
            subject: $scope.subject,
            message: $scope.message,
            name: $scope.name,
            surname: $scope.surname,
            number: $scope.phone,
            email: $scope.email


        });

        console.log(data);

        $http.put('http://localhost:8080/api/ContactUsRegistration?' + data)
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
