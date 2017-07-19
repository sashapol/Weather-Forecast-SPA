(function(){
    var weatherApp = angular.module('weatherApp');
    weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
        $scope.title = 'Home';
        $scope.city = cityService.city;
        
        $scope.$watch('city', function(){
           cityService.city = $scope.city; 
        });
        
        $scope.submit = function(){
            $location.path("/forecast");  
        };
    }]);
}());