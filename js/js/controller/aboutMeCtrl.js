angular.module('myApp').controller('aboutMeCtrl',['$scope', '$sce',function($scope,$sce){

    
    $scope.aboutMyself=function(){   
    
        $scope.aboutMyselfR="<h2>Hello Sabin</h2>";
    }
    
    
}]);