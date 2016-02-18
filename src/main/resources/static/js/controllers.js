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

        $http.put('http://registration-kirviai.rhcloud.com/api/register?' + data) // TODO FIX
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
    $http({
        method: 'GET',
        url: 'http://registration-kirviai.rhcloud.com/api/getRegistrationInformation'
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
            email: $scope.email,
            radioValue: $scope.radioValue
        });

        console.log(data);

        $http.put('http://registration-kirviai.rhcloud.com/api/ContactUsRegistration?' + data)
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

function showContactUsConfirmModal(){
    document.getElementById("modalInputTheme").innerHTML = document.getElementById("inputSubject").value;
    document.getElementById("modalInputComments").innerHTML = document.getElementById("inputComment").value;
    document.getElementById("modalInputName").innerHTML = document.getElementById("inputName").value;
    document.getElementById("modalInputSurname").innerHTML = document.getElementById("inputSurname").value;
    document.getElementById("modalInputPhone").innerHTML = document.getElementById("inputPhone").value;
    document.getElementById("modalInputEmail").innerHTML = document.getElementById("inputEmail").value;
    document.getElementById("modalInputRadio").innerHTML = document.getElementById("inputRadio").value;
}