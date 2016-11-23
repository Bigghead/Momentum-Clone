
var mainContainer = document.getElementById("container");
var quoteContainer = document.getElementById("quote-container");

window.onload = function(){
	if(!localStorage.hasOwnProperty('name') || localStorage.name === null){
  var name = prompt("What is your name?");
  localStorage.name = name;

 }
 mainContainer.style.opacity = "1";
 quoteContainer.style.opacity = "1";
}

//===============Background Image================
var url = "https://source.unsplash.com/category/nature/1600x900/daily";
document.body.style.backgroundImage = "url" +"("+url+")"


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

		var ampm = 'am';

		var date = time.getDate();
		var month = time.getMonth() +1;
		if(minutes < 10){
			minutes = '0' + minutes;
		}

		if(hours >= 12){
			ampm = 'pm';
		}

		if(hours === 0){
			hours = 12;
		} else if(hours < 10){
			hours = '0' + hours;
		}	else if(hours > 12){
			hours = hours - 12;
		}

	var greeting = document.querySelector('#greeting');
		if(ampm === 'am' && hours <= 10){
<<<<<<< HEAD
			greeting.innerText = 'Good Morning, ';
		} else if(ampm === 'pm' && (hours < 5 || hours === 12)){
			greeting.innerText = 'Good Afternoon, ' + localStorage.name;
		} else if( ampm === 'pm' && hours >= 5){
			greeting.innerText = 'Good Evening, ';
=======
			greeting.innerText = 'Good Morning,' + localStorage.name;
		} else if(ampm === 'pm' && (hours < 5 || hours === 12)){
			greeting.innerText = 'Good Afternoon, ' + localStorage.name;
		} else if( ampm === 'pm' && hours >= 5){
			greeting.innerText = 'Good Evening,' + localStorage.name;
>>>>>>> ce45f7d109f04800bf823bbd0af4ef22b7a252eb
		}

		currentTime.innerText = hours +':' + minutes ;
		currentDate.innerText = month + '/' +date;
	}, 1000);

//Random Quote
var randomQuote = document.getElementById('randomQuote');
var author = document.querySelector('.quoteAuthor');
var quote = new XMLHttpRequest();
	quote.open('GET', 'http://quotes.rest/qod.json?category=inspire');
	quote.onload = function(){
		var randomQuotes = JSON.parse(quote.responseText.replace(/\\/g, ''));
		randomQuote.innerText = '"' + randomQuotes.contents.quotes[0].quote + '"';
		author.innerText = '-' + randomQuotes.contents.quotes[0].author;
	};

	quote.send();


//==============Basic ToDo Functionality=========
var input = document.querySelector('input');
var node = document.createElement('LI');
var todoInput = document.querySelector('ul');
var mainFocus = document.querySelector('#mainFocus');

if(localStorage.buttonClass === "active"){
  node.className = "done";
} else {
	node.className = "";
}


if(!localStorage.hasOwnProperty('todo') || (localStorage.todo === '' || localStorage.todo === null ||
  localStorage.todo === 'null')){ //if there is no todo or todo is empty
		input.addEventListener('keypress', function(e){
			if(e.keyCode === 13 && input.value !== ''){
				localStorage.todo = input.value;
				showTodo();
		    }
		  });
 } else {
	 showTodo();
 }


function showTodo(){
	mainFocus.innerText = 'Today\'s Goal: ';
	node.innerHTML = '<span class="doneTodo"><i class="fa fa-check-circle-o" aria-hidden="true"></i></span> '+localStorage.todo+ '<span class="remove"><i class="fa fa-times" aria-hidden="true"></i></span>';
  todoInput.appendChild(node);
	input.style.display = 'none';

	input.addEventListener('keypress', function(e){
		if(e.keyCode === 13 && input.value !== ''){
			localStorage.todo = input.value;
			showTodo();
			}
		});

		//checkmark
		var button = document.querySelector('.doneTodo');
		button.addEventListener('click', function(){
		this.parentNode.classList.toggle('done');
		if(this.parentNode.className === "done"){
			localStorage.buttonClass = "active"
		}else{
			delete localStorage.buttonClass;
		}
		});

		//X button
		var remove = document.querySelector('.remove');
		remove.addEventListener('click', function(){
		node.parentNode.removeChild(node);
		localStorage.todo = '';
		mainFocus.innerText = 'What Is Your Main Focus For Today?';
		input.style.display = '';
		input.value = '';
		node.className = "";
		});
}
