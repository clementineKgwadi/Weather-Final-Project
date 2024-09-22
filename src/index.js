function updateWeather(response) {
  let currentCityElement = document.querySelector("#current-city");
  let temperatureElement = document.querySelector("#temperature");
  let fWeatherElement = document.querySelector("#weather-feels-like");
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind");
  let weekDaysElement = document.querySelector("#week-days");
  let timeElement = document.querySelector("#time");
  let imageIconElement = document.querySelector("#image-icon");

  let date = new Date(response.data.time * 1000);

  currentCityElement.innerHTML = response.data.city;
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let feels_like = Math.round(response.data.temperature.feels_like);
  fWeatherElement.innerHTML = `${feels_like}°C`;
  conditionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  weekDaysElement.innerHTML = formatDay(date);
  timeElement.innerHTML = getTime(date);
  imageIconElement.innerHTML = `<img
                  src="${response.data.condition.icon_url}" class = "image-icon" />`;
}

function getTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return ` ${hours}:${minutes}`;
}

function formatDay(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day}`;
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
