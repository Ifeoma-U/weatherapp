const apiKey = "8a5739c0b2b40366f383d334288402eb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    

    if(response.status == 404){
        document.querySelector(".error").style.display = 'flex';
        document.querySelector(".weather").style.display = 'none';
    } else {
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").textContent = data.main.humidity + '%';
    document.querySelector(".wind").textContent = data.wind.speed + 'km/hr';

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }

    document.querySelector(".weather").style.display = "flex"
    document.querySelector(".error").style.display = 'none';
}
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})