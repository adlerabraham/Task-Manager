(function () {
    'use strict';
    
    angular.module('taskManagerApp')
    .service('ConnectionService', ConnectionService);

    ConnectionService.$inject = ['$http'];
    function ConnectionService($http) {
        var service = this;

        service.post = function (user, btnName) {
            if(btnName === 'login'){
                return $http({
                    method: 'POST',
                    url: 'database/user/connection.php',
                    data: user
                })
                .then(function (response) {  //respons: returned value for the php script
                    return response.data;
                });
            }
            else if(btnName === 'signUp'){
                return $http({
                    method: 'POST',
                    url: 'database/user/registration.php',
                    data: user
                })
                .then(function (response) {
                    return response.data;
                });
            }
            return ;
        }
    }
})();