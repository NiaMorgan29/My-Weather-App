function showTemperature(response) {
  let temperatureItem = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#current-city");
  let temperature = Math.round(response.data.temperature.current);

  cityElement.innerHTML = response.data.city;
  temperatureItem.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();

  let searchInputItem = document.querySelector("#search-input");
  let city = searchInputItem.value.trim().toLowerCase();

  let apiKey = "bc71af9e0b8fdta73d8ebob24352d13f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function formatDate(date) {
  let day = date.getDay();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
