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
                    url: 'connection.php',
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