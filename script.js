const apiKey = '3dd0d35c2fd620b346f6bcdb33faa49a';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

let imgIcon = document.querySelector('.weather-icon');
let currTemp = document.querySelector('.temp-data');
let city = document.querySelector('.city');
let humidityData = document.querySelector(".humidity-data");
let windData = document.querySelector('.wind-data');

async function checkWeather(cityName){
    const response = await fetch(apiURL+`&q=${cityName}`+`&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

   city.innerHTML= data.name;
   currTemp.innerHTML=Math.round(data.main.temp) + ` °C`;
   humidityData.innerHTML=data.main.humidity + `%`;
   windData.innerHTML=data.wind.speed+` km/hr`;
} 

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})

// checkWeather()