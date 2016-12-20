var app = angular.module('app', ['ngRoute','ngAnimate','ngSanitize','ui.bootstrap']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'views/home.html',
            controller:'homeController'
        })
        .otherwise({
            templateUrl:'views/home.html',
            controller:'homeController'
        })
});

app.controller('mainController', function($rootScope,$scope,$log){
    $log.log("controller initialized")
});