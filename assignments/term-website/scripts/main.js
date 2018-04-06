
var obj = new XMLHttpRequest();

var reqUrl = 'data/service-data.json';
obj.open('GET', reqUrl, true);
obj.send();

obj.onload = function(){
    var objInfo = JSON.parse(obj.responseText);
    console.log(objInfo.services[1]);

    
}