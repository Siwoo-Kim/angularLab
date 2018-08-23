

angular.module("myToDoApp", [
        "ngRoute",
        "ngResource",
        "ngCookies",
        "ui.sortable"
    ])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {
            templateUrl: 'views/todo.html',
            controller: 'toDoCtrl'
        })
            .when("/about", {
                templateUrl: "views/about.html",
                controller: 'aboutCtrl'
            })
            .otherwise({
                redirectTo: "/"
            })
    });