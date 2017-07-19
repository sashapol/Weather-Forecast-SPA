(function(){
    var weatherApp = angular.module('weatherApp');
    weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService){
        
        $scope.city = cityService.city || "New York, NY";
        
        $scope.days = $routeParams.days || '2';
        
        var apiId = "d839497d435137ace2d0dc99bd20d577";
        
        $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
        
        $scope.convertToFarenheit = function(degK){
            return Math.round((1.8 * (degK - 273))+ 32);
        };
        
        $scope.convertToDate = function(dt){
            return new Date(dt * 1000);
        };
        
    }]);
}());