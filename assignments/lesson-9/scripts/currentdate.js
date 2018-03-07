var date = new Date();

var year = date.getFullYear();
var month = date.getMonth();
var dayOfWeek = date.getDay() - 1;
var dayOfMonth = date.getDate();

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

var formatted = days[dayOfWeek] + ", " + dayOfMonth + " " + months[month] + " " + year;

//Monday, 6 April 2020
document.getElementById("currentdate").innerHTML = formatted;