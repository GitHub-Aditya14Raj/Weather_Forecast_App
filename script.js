
const apikey="ef4b9a5cee3b49033325b84ee26a188a"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".Humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".Wind").innerHTML=data.wind.speed+" Kmph";
    if (data.weather[0].main=="Clouds"){
        weatherIcon.src="Images/clouds.png"    
    }
    else if (data.weather[0].main=="Clear"){
        weatherIcon.src="Images/clear.png"    
    }
    else if (data.weather[0].main=="Drizzle"){
        weatherIcon.src="Images/drizzle.png"    
    }
    else if (data.weather[0].main=="Mist"){
        weatherIcon.src="Images/mist.png"    
    }
    else if (data.weather[0].main=="Rain"){
        weatherIcon.src="Images/rain.png"    
    }
    else if (data.weather[0].main=="Snow"){
        weatherIcon.src="Images/snow.png"    
    }
    document.querySelector(".weather").style.display="block"
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})