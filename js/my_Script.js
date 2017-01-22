
tday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
tmonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

function GetClock() {
	var d = new Date();
	var nday = d.getDay(),
		nmonth = d.getMonth(),
		ndate = d.getDate(),
		nyear = d.getYear();
	if (nyear < 1000) nyear += 1900;
	var nhour = d.getHours(),
		nmin = d.getMinutes(),
		nsec = d.getSeconds();
	if (nmin <= 9) nmin = "0" + nmin;
	if (nsec <= 9) nsec = "0" + nsec;

	var currentTime = nhour + ":" + nmin + ":" + nsec + "";
	var currentDate = tday[nday] + ", " + tmonth[nmonth] + " " + ndate + ", " + nyear + "";
	
	document.getElementById('date').innerHTML = ""+ currentDate;
	document.getElementById('time').innerHTML = ""+ currentTime;
	
//	document.getElementById('clockbox').innerHTML = "" + tday[nday] + ", " + tmonth[nmonth] + " " + ndate + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "";
}

window.onload = function () {
	GetClock();
	setInterval(GetClock, 1000);
}


//JQUERY 
$( document ).ready(function() {
	
	//Weather Initialiser
	updateWeather();
	
	//refreshes Weather every hour
	setInterval(function(){ 
		updateWeather();
		console.log("updated weather"); 					  
  	}, 60*60*1000);
	
	
	//Weather Pluggin
	function updateWeather(){
		 $('.weather-temperature').openWeather({
			key: '32d813bb3be14d7c045e6baa3486581c',
			city: 'London, UK',
			descriptionTarget: '.weather-description',
			windSpeedTarget: '.weather-wind-speed',
			minTemperatureTarget: '.weather-min-temperature',
			maxTemperatureTarget: '.weather-max-temperature',
			humidityTarget: '.weather-humidity',
			sunriseTarget: '.weather-sunrise',
			sunsetTarget: '.weather-sunset',
			placeTarget: '.weather-place',
			iconTarget: '.weather-icon',
			customIcons: 'img/icons/weather/',
			success: function() {
				$('.weather-wrapper').show();
			},
			error: function() {
				console.log("Weather nao esta funfando... Contact biel");
			}
		});
		
	}


	
});

