var weatherObject = new XMLHttpRequest();

var reqUrl = 'http://api.wunderground.com/api/fb18c4811ea76515/conditions/q/TX/Greenville.json';
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




