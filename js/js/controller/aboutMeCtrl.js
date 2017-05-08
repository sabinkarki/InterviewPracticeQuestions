angular.module('myApp').controller('aboutMeCtrl',['$scope', 'myFactory',function($scope,myFactory){
    
    $scope.aboutMyself = function(){   
        var msg="<h2>Hello Sabin</h2>";
         myFactory.callFactory(msg);
    };
       
       $scope.aboutMyself();
    
    $scope.aboutMyLastProject=function(){
            var msg="<h1>My Lst project</h1>";
          myFactory.callFactory(msg);
    };
    
    $scope.aboutChallenging=function(){
             var msg="<h1>My Challenging project</h1>";
          myFactory.callFactory(msg);
    }
    
}]);