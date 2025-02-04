const apiKey = "69830bf374214dacab05152c59d00ceb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const tempImg = document.querySelector(".weather-icon")

async function checkWeather(city) {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      var data = await response.json();

      console.log(data);

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c" ;
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
     
    if(data.weather[0].main == "Clouds"){
      tempImg.src = "clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
      tempImg.src = "clear.png"
    }
    else if(data.weather[0].main == "Rain"){
      tempImg.src = "rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
      tempImg.src = "drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
      tempImg.src = "mist.png"
    }
    

}
searchBtn.addEventListener("click",()=>{
      checkWeather(searchBox.value);
})
document.addEventListener("keydown",(e)=>{
    if(e.key === "Enter"){
      checkWeather(searchBox.value);
    }
})


