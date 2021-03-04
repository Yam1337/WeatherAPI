var content = document.getElementById("content")
var srcBtn = document.getElementById("search2")
var test = icon.src.innerHTML
var OnButtonClick = function() {
    var city1 = document.getElementById("search1").value;
    fetch("http://api.weatherapi.com/v1/current.json?key=55cbdff15f4f49aaa9f132150210303&q=" + city1)
    .then(res => res.json())
    .then(data => {
        icon.src = "http:" + data.current.condition.icon
        city.innerHTML = "City: " + data.location.country + ", " + data.location.name
        time.innerHTML = "Local time: " + data.location.localtime
        weather.innerHTML = "Weather: " + data.current.condition.text
        temp.innerHTML = "Temperature: " + data.current.temp_c + "°C"
        wind.innerHTML = "Wind speed: " + data.current.wind_kph + "km/h"
        last.innerHTML = "Last updated: " + data.current.last_updated
        
    })
}
srcBtn.addEventListener("click", OnButtonClick)