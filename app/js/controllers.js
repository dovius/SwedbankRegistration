var angular = require("angular");

var appControllers = angular.module('appControllers', []);

appControllers.controller('LangCtrl', ['$scope', '$translate',
  function($scope, $translate) {
    $scope.lang = $translate.use();
    $scope.changeLang = function(lang) {
        $translate.use(lang);
        $scope.lang = lang;
    }
  }
]);

appControllers.controller('MenuCtrl', ['$scope',
  function($scope) {}
]);

appControllers.controller("RegistrationCtrl", ['$scope', '$http', function ($scope, $http) {
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

        $http.put('http://registration-kirviai.rhcloud.com/api/register?' + data)
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
}]);

appControllers.controller('RegistrationListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://registration-kirviai.rhcloud.com/api/getRegistrationInformation'
    }).then(function successCallback(response) {
        $scope.registrations = response.data;
        console.log(response);
    }, function errorCallback(response) {

    });
}]);

appControllers.controller("ContactCtrl", ['$scope', '$http', function ($scope, $http) {
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
}]);


module.exports = appControllers;