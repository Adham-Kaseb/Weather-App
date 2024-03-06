const apiKey = "a9d00bff2aba141139b41d06aea949a4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search_input");
const searchBtn = document.querySelector(".search_btn");
const weatherIcon = document.querySelector(".weather_img");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  const tempElement = document.querySelector(".temp");
  tempElement.innerHTML = Math.round(data.main.temp) + "°C";
  tempElement.addEventListener("mouseover", () => {
    tempElement.innerHTML = data.main.temp + "°C";
  });
  tempElement.addEventListener("mouseout", () => {
    tempElement.innerHTML = Math.round(data.main.temp) + "°C";
  });
  document.querySelector(".hum").innerHTML = data.main.humidity + " %";
  document.querySelector(".Cond").innerHTML = data.weather[0].main;
  document.querySelector(".maxTemp").innerHTML =
    Math.round(data.main.temp_max) + "°C";
  document.querySelector(".minTemp").innerHTML =
    Math.round(data.main.temp_min) + "°C";
  document.querySelector(".windspeed").innerHTML = data.wind.speed + " KM/H";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "assets/images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "assets/images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "assets/images/rain";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "assets/images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "assets/images/mist.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(search.value);
});
