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

appControllers.controller("RegistrationCtrl", ['$scope', '$http', '$uibModal', function ($scope, $http, $uibModal) {
    $scope.Registration = function () {
        var data = {
            name: $scope.name,
            surname: $scope.surname,
            number: $scope.phone,
            email: $scope.email,
            bank: $scope.bank,
            date: $scope.date,
            subject: $scope.subject,
            comment: $scope.comment
        };

        //$.param equivalent
        var url = Object.keys(data).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
        }).join('&');

        //TODO mov only when request is success
          var modalInstance = $uibModal.open({
                templateUrl: 'register-modal.html',
                controller: 'RegistrationModalCtrl',
                resolve: {
                    data: function () {
                        return data;
                    }
                }
            });

        $http.put('http://localhost:8080/api/register?' + url) // TODO FIX
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

appControllers.controller("RegistrationModalCtrl", ['$scope', '$uibModalInstance', 'data',  function ($scope, $uibModalInstance, data) {
      $scope.data = data;

      $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');

        //redirect to menu?
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