(function(){
    var weatherApp = angular.module('weatherApp');
    weatherApp.directive('weatherReport', function(){
        
        return{
            restrict: 'E',
            replace: true,
            templateUrl: '/directives/templates/weatherReport.html',
            scope:{
                weatherDay: '=',
                convertToStandart : '&',
                convertToDate: '&',
                dateFormat : '@'
            }
            /*,
            link: function(scope,elems,attr)
            {
                scope.convertToFarenheit = function(degK){
                    return Math.round((1.8 * (degK - 273))+ 32);
                };
                scope.convertToDate = function(dt){
                    return new Date(dt * 1000);
                };
            }*/
        }
    });
}());