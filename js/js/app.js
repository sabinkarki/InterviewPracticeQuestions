var app = angular.module('myApp', ['ngRoute','ngSanitize']);


app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<h1>Home</h1><a href="#!/aboutMe">About Me</a>'
      })
        .when('/coreJava',{
           template:'<h2>I am Nikita Karki</h2>'
     })
      .when('/aboutMe',{
         templateUrl:'templates/aboutMeTemplate/aboutMe.html',
        controller:'aboutMeCtrl'
    })
      .otherwise({
        redirectTo: '/'
      });
    
}]);

app.filter('showInHtml', function($sce) { return $sce.trustAsHtml; })