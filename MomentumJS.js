

// location function API call
var geoRequest = new XMLHttpRequest();
geoRequest.open("GET", "http://ipinfo.io/json");
geoRequest.onload = function() {
	geoObj = JSON.parse(geoRequest.responseText);
	var lat = geoObj.loc.substr(0, 7);
	var long = geoObj.loc.substr(8);


	// weather data API call
	var weatherRequest = new XMLHttpRequest();
	weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&units=imperial&appid=332aac2b0595764b02d7634b86a9b463');
	weatherRequest.onload = function(){

		//Declaring Variables
		var weatherData = JSON.parse(weatherRequest.responseText);
		var temp = document.getElementById('temperature');
		var region = document.getElementById('region');
		var weatherIcon = document.getElementsByTagName('I')[0];
		var weatherCondition = weatherData.weather[0].main;
		  region.innerHTML  = weatherData.name; //'<h1></h1>'
		  temp.innerHTML = Math.round(weatherData.main.temp) + " " + "&deg";

		  // Change Weather Icon Based on Weather Condition
		  switch (weatherCondition) {
		  	case "Clear":
		  	weatherIcon.className = "wi wi-day-sunny"
		  	break;
		  	case "Clouds":
		  	weatherIcon.className = "wi wi-day-cloudy"
		  	break;
		  	case "Rain":
		  	weatherIcon.className = "wi wi-day-rain"
		  	break;
		  	case "Snow":
		  	weatherIcon.className = "wi wi-day-snow"
		  	break;
		  	case "Thunderstorm":
		  	weatherIcon.className = "wi wi-day-thunderstorm"
		  	break;
		  	case "Drizzle":
		  	weatherIcon.className = "wi wi-day-showers"
		  	break;
		  }

		}
		weatherRequest.send();
	}

	geoRequest.send();

	