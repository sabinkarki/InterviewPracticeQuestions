var app = angular.module('myApp', ['ngRoute', 'ngSanitize']);


app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/aboutMeTemplate/aboutMe.html',
            controller: 'aboutMeCtrl'
        })
        .when('/coreJava', {
            template: '<h2>I am Nikita Karki</h2>'
        })
        .when('/aboutMe', {
            templateUrl: 'templates/aboutMeTemplate/aboutMe.html',
            controller: 'aboutMeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);

/*Filter to render html tag*/
app.filter('showInHtml', function($sce) {
    return $sce.trustAsHtml;
})

/*This is the controller which gets object from myfactory and that object is set by rest of the controller*/
app.controller('mainCtrl', function($scope, myFactory) {
    $scope.showInMainController = myFactory.callFactory();

});

/*This is the factory that is being called from controllers other than mainCtrl controller*/
app.factory('myFactory', function() {
    var myObject = {};
    myObject.message = '';

    return {
        callFactory: function(msg) {
            myObject.message = msg;
            return myObject;
        }
    }
});



/*One way of sharing data between two controller using $broadcast*/
/*app.controller('mainCtrl',['$scope','myFactory',function($scope,myFactory,$rootScope){
      $scope.$on('handleBroadcast', function(){
             $scope.showInMainController = myFactory.message;
     });
      
    $scope.test=function(){
        $scope.showInMainController = myFactory.message;
    }

}]);


app.factory('myFactory',['$rootScope',function($rootScope,mainCtrl){
    var myObject={};
    myObject.message='';
    myObject.prepForBroadcast=function(msg){
                       this.message=msg;
                        this.broadcast();
    };
    myObject.broadcast=function(){
        $rootScope.$broadcast('handleBroadcast');
    }
    return myObject;
 }]);*/


/*This is the factory which calls json data and calls to the callback whoever calls ths*/
app.factory('jsonCallerFactory', ['$http', function($http) {
    var jsonData = {};
    return {
        getJsonData: function(callback) {
            return $http({
                method: 'GET',
                url: 'js/jsonfile/aboutMeJson/aboutMe.json'
            }).then(function(success) {
                jsonData = success.data;
                callback(jsonData);
            }, function(error) {
                  console.log(error.data);
            });
        }

    }
}]);