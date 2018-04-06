var obj = new XMLHttpRequest();

var reqUrl = 'data/service-data.json';
obj.open('GET', reqUrl, true);
obj.send();

obj.onload = function () {
    var objInfo = JSON.parse(obj.responseText);
    console.log("testing obj jquery .each()");

    $.each(objInfo.services, function (index, element) {
        $('.tbody').append(
                '<tr><td>'+ element.description +'</td><td> $'+ element.price +'</td></tr>'
        );
    });

}
