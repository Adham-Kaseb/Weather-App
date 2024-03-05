const apiKey = "a9d00bff2aba141139b41d06aea949a4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search_input");
const searchBtn = document.querySelector(".search_btn");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  // document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  const tempElement = document.querySelector(".temp");
  tempElement.innerHTML = Math.round(data.main.temp) + "°C";
  tempElement.addEventListener("mouseover", () => {
    tempElement.innerHTML = data.main.temp + "°C";
  });
  tempElement.addEventListener("mouseout", () => {
    tempElement.innerHTML = Math.round(data.main.temp) + "°C";
  });
  document.querySelector(".hum").innerHTML = data.main.humidity + " %";
  document.querySelector(".maxTemp").innerHTML =
    Math.round(data.main.temp_max) + "°C";
  document.querySelector(".minTemp").innerHTML =
    Math.round(data.main.temp_min) + "°C";
  document.querySelector(".windspeed").innerHTML = data.wind.speed + " KM/H";
}

searchBtn.addEventListener("click", () => {
  checkWeather(search.value);
});
