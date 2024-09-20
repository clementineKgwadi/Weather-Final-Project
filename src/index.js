function updateWeather(response) {
  let currentCityElement = document.querySelector("#current-city");
  let city = response.data.city;
  currentCityElement.innerHTML = city;
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
}

function currentCity(city) {
  let apiKey = "fe5e09ad6aaeb38c2a11t3o0f7b7a744";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function displayCity(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  currentCity(cityInputElement.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayCity);

currentCity("Pretoria");
