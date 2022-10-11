(function () {
    'use srcrict';
    angular.module('taskManagerApp')
    .controller('LoginController', LoginController);

    LoginController.$inject=['ConnectionService','$window']
    function LoginController(ConnectionService,$window) {
        var loginCtrl = this;
        loginCtrl.user = {
            username: '',
            password: ''
        };
        loginCtrl.msg="";
        
        loginCtrl.login = function () {
            console.log(loginCtrl.user);
            ConnectionService.post(loginCtrl.user, 'login')
            .then(function (response) {
                console.log(response);
                if(response.indexOf('Connected') > -1){
                    loginCtrl.msg = "Connection successful";
                    $window.location="#/task";
                }
                else{
                    loginCtrl.msg = "Connection failed";
                }
            });
        };
    }
})();