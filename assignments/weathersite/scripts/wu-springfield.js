var weatherObject = new XMLHttpRequest();

var reqUrl = 'https://api.wunderground.com/api/fb18c4811ea76515/conditions/q/OR/Springfield.json';
weatherObject.open('GET', reqUrl, true);

weatherObject.send();

weatherObject.onload = function(){
  
    var weatherInfo = JSON.parse(weatherObject.responseText);
    
    console.log(weatherInfo);
    
    
    //weather_icon
    document.getElementById('weather_icon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('ws').innerHTML = weatherInfo.current_observation.wind_mph + ' mph ' + weatherInfo.current_observation.wind_dir;
    
    document.getElementById('curr_weather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('curr_temp').innerHTML = weatherInfo.current_observation.temp_f + '&deg;';
    
    document.getElementById('precipitation').innerHTML = weatherInfo.current_observation.precip_today_string;
    
    // .current_observation.wind_mph
    // .current_observation.wind_dir
    
    
    
//    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
//    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
//    document.getElementById('weather_icon').src = weatherInfo.current_observation.icon_url;
    

};


var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

// Create the request variable
var request = new XMLHttpRequest();

// prepare the request
request.open('GET', requestURL);
request.responseType = 'json';

// Send the request
request.send();

// handle response
request.onload = function() {
    var cities = request.response;
    
    document.getElementById('city1').innerHTML = cities['towns'][0].name;
    document.getElementById('moto1').innerHTML = cities['towns'][0].motto;
    document.getElementById('year1').innerHTML = cities['towns'][0].yearFounded;
    document.getElementById('pop1').innerHTML = cities['towns'][0].currentPopulation;
    document.getElementById('aRain1').innerHTML = cities['towns'][0].averageRainfall;
    
    document.getElementById('city2').innerHTML = cities['towns'][1].name;
    document.getElementById('moto2').innerHTML = cities['towns'][1].motto;
    document.getElementById('year2').innerHTML = cities['towns'][1].yearFounded;
    document.getElementById('pop2').innerHTML = cities['towns'][1].currentPopulation;
    document.getElementById('aRain2').innerHTML = cities['towns'][1].averageRainfall;
    
    document.getElementById('city3').innerHTML = cities['towns'][3].name;
    document.getElementById('moto3').innerHTML = cities['towns'][3].motto;
    document.getElementById('year3').innerHTML = cities['towns'][3].yearFounded;
    document.getElementById('pop3').innerHTML = cities['towns'][3].currentPopulation;
    document.getElementById('aRain3').innerHTML = cities['towns'][3].averageRainfall;
}


// Request for 10 day forecast
var requestForecast = "https://api.wunderground.com/api/fb18c4811ea76515/forecast10day/q/OR/Springfield.json";
var requestFC = new XMLHttpRequest();

requestFC.open('GET', requestForecast);
//requestFC.responseType = 'json';

// Send the request
requestFC.send();

// handle response
requestFC.onload = function() {
    //var forecast = request.response;
    var forecastResponse = JSON.parse(requestFC.responseText);
    //console.log(forecastResponse);
    
    // High
    document.getElementById('hi1').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["0"].high.fahrenheit + '&deg;';
    document.getElementById('hi2').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["1"].high.fahrenheit + '&deg;';
    document.getElementById('hi3').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["2"].high.fahrenheit + '&deg;';
    document.getElementById('hi4').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["3"].high.fahrenheit + '&deg;';
    document.getElementById('hi5').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["4"].high.fahrenheit + '&deg;';
    document.getElementById('hi6').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["5"].high.fahrenheit + '&deg;';
    document.getElementById('hi7').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["6"].high.fahrenheit + '&deg;';
    document.getElementById('hi8').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["7"].high.fahrenheit + '&deg;';
    document.getElementById('hi9').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["8"].high.fahrenheit + '&deg;';
    document.getElementById('hi10').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["9"].high.fahrenheit + '&deg;';
    
    // Low
    
    document.getElementById('lo1').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["0"].low.fahrenheit + '&deg;';
    document.getElementById('lo2').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["1"].low.fahrenheit + '&deg;';
    document.getElementById('lo3').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["2"].low.fahrenheit + '&deg;';
    document.getElementById('lo4').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["3"].low.fahrenheit + '&deg;';
    document.getElementById('lo5').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["4"].low.fahrenheit + '&deg;';
    document.getElementById('lo6').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["5"].low.fahrenheit + '&deg;';
    document.getElementById('lo7').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["6"].low.fahrenheit + '&deg;';
    document.getElementById('lo8').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["7"].low.fahrenheit + '&deg;';
    document.getElementById('lo9').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["8"].low.fahrenheit + '&deg;';
    document.getElementById('lo10').innerHTML = forecastResponse.forecast.simpleforecast.forecastday["9"].low.fahrenheit + '&deg;';
    
}


