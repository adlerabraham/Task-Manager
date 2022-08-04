(function () {
    'useStrict';

    angular.module('taskManager')
    .controller("SignUpController",SignUpController);

    SignUpController.$inject = ['ConnectionService','$window'];
    function SignUpController(ConnectionService,$window) {
        var signUpCtrl= this;
        signUpCtrl.user ={
            username : "",
            password : "",
            confirmePassword : ""
        };
    }
})();