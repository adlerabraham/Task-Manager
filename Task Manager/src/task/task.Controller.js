(function () {
    'useStrict';

    angular.module('taskManagerApp')
    .controller("TaskController", TaskController);

    TaskController.$inject=['ConnectionService'];
    function TaskController(ConnectionService) {
        
    }
})();