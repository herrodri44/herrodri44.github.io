
var roundNum = function(num) {
    return Math.floor(num * 100) / 100;
}


// t = temp averg
var t1 = document.getElementById("high").innerHTML.slice(0,2);
var t2 = document.getElementById("low").innerHTML.slice(0,2);
var temperature = (parseFloat(t1) + parseFloat(t2)) / 2;


// s = wind speed
var ws = document.getElementById("ws").innerHTML.slice(0,2);
var windSpeed = parseFloat(ws);
console.log(windSpeed);

//f = 35.74 + 0.6215 t - 35.75 s0.16 + 0.4275 t s0.16

var f1 = 35.74 + 0.6215 * temperature;
var f2 = -35.75 * windSpeed * 0.16;
var f3 = 0.4275 * temperature * windSpeed * 0.16;

var f = f1 + f2 + f3;
console.log(f);

document.getElementById("wChill").innerHTML = roundNum(f);



