
angular.module("myToDoApp")
    .controller("toDoCtrl", function ($scope) {
        $scope.todos = [];
        $scope.addToDo = () => {
            $scope.todos.push($scope.todo);
            $scope.todo = "";
        };
        $scope.removeToDo = (index) => {
            $scope.todos.splice(index, 1);
        }
    })