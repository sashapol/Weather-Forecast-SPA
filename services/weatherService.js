(function(){
    
    var weatherApp = angular.module("weatherApp");
    
    weatherApp.service('weatherService', ["$resource", function($resource){
        var apiId = "d839497d435137ace2d0dc99bd20d577";
        this.GetWeather = function(city, days){
            
            var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
                                      {callback: "JSON_CALLBACK"},
                                      {get: {method: "JSONP"}}
                                     );
        
            var weatherResult = weatherAPI.get({q: city, cnt: days, APPID: apiId});
            return weatherResult;
        };
        
    }]);
    
}());