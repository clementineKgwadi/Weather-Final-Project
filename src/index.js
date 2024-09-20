function displayCity(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  let currentCityElement = document.querySelector("#current-city");
  currentCityElement.innerHTML = cityInputElement.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", displayCity);
