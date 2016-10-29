

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
		  temp.innerHTML = Math.round((weatherData.main.temp - 32) * 5/9) + " " + "&deg";

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

	//Time Implementation
var currentTime = document.getElementById('time');
var currentDate = document.getElementById('date');
	setInterval(function(){
		var time = new Date();
		var hours = time.getHours()
		var minutes = time.getMinutes();
		var seconds = time.getSeconds();
		
		var ampm = '';
		
		var date = time.getDate();
		var month = time.getMonth();
		if(minutes < 10){
			minutes = '0' + minutes;
		}
		if(hours > 12){
			hours = hours - 12;
			ampm = 'PM';
		} else if(hours < 12){
			ampm = 'AM';
		} else if( hours === 0){
			hours = 12;
		}
		
		
		currentTime.innerText = hours +':' + minutes + ' ' + ampm;
		currentDate.innerText = month + '/' +date;
	}, 1000);

//Random Quote
var randomQuote = document.getElementById('randomQuote');
var quote = new XMLHttpRequest();
	quote.open('GET', 'http://quotes.rest/qod.json');
	quote.onload = function(){
		var randomQuotes = JSON.parse(quote.responseText);
		console.log(randomQuotes);
		randomQuote.innerText = randomQuotes.contents.quotes[0].quote;
	};
	
	quote.send();

	
