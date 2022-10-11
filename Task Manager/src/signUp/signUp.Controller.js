(function () {
    'useStrict';

    angular.module('taskManagerApp')
    .controller("SignUpController",SignUpController);

    SignUpController.$inject = ['ConnectionService','$window'];
    function SignUpController(ConnectionService,$window) {
        var signUpCtrl= this;
        signUpCtrl.user ={
            username : "",
            password : "",
            confirmPassword : ""
        };

        signUpCtrl.signUp = function () {
            console.log(signUpCtrl.user);
            if(signUpCtrl.user.password == signUpCtrl.user.confirmPassword)
            {
                
                ConnectionService.post(signUpCtrl.user, 'signUp')
                .then(function (response) {
                    console.log(response);
                    if(response.indexOf('Completed') > -1){
                        signUpCtrl.msg = "Registration successful";
                        $window.location="#/login";
                    }
                    else{
                        signUpCtrl.msg = "Registration failed";
                    }
                });
            }
            else{
                signUpCtrl.msg = "Password and confirmation must match";
            }
            
        }
    }
})();