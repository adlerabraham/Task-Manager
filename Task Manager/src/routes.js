(function () {
    'use strict';

    angular.module('taskManagerApp')
    .config(RoutesConfig);

    RoutesConfig.$inject =['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider,$urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home',{
            url: '/',
            templateUrl: 'src/main/template/home.template.html'
        })
        .state('login',{
            url: '/login',
            templateUrl: 'src/login/template/login.template.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'   
            
        })
        .state('signUp',{
            url: '/signUp',
            templateUrl: 'src/signUp/template/signUp.template.html',
            controller: 'SignUpController as signUpCtrl'
        })
        .state('task',{
            url: '/task',
            templateUrl: 'src/task/template/task.template.html',
            controller: 'TaskController as taskCtrl'
        });
    }
})();