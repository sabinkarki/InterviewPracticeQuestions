angular.module('myApp').controller('aboutMeCtrl', ['$scope', 'myFactory','jsonCallerFactory',function($scope, myFactory,jsonCallerFactory) {
    var tempJson = {};
    
   
    $scope.aboutMyself = function() {
          var msg='';
         jsonCallerFactory.getJsonData(function(temp){
              tempJson = temp;
              msg=tempJson.results[0].name;
              myFactory.callFactory(msg);
         });
    };
    
    $scope.aboutMyself();

    $scope.aboutMyLastProject = function() {
        var msg=tempJson.results[1].name;                       
        myFactory.callFactory(msg);
    };

    $scope.aboutChallenging = function() {
        var msg=tempJson.results[2].name; 
        myFactory.callFactory(msg);
    }

    $scope.questionsTobeAsked = function() {
       var msg=tempJson.results[3].name;
        myFactory.callFactory(msg);
    }
    
}]);