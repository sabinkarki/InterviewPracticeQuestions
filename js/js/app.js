var app = angular.module('myApp', ['ngRoute','ngSanitize']);


app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
       templateUrl:'templates/aboutMeTemplate/aboutMe.html',
        controller:'aboutMeCtrl'
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


app.factory('myFactory', function(){
    var myObject={};
    myObject.message='';
  
     return{
        callFactory:function(msg){
                myObject.message=msg;
                return myObject;
        }
    }
});

app.controller('mainCtrl', function( $scope, myFactory ){
    $scope.showInMainController=myFactory.callFactory();
    
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



