function showTemperature(response) {
  let temperatureItem = document.querySelector("#current-temp");
  temperatureItem.innerHTML = temperature;
  let temperature = Math.round(response.data.temperature.current);
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#current-city");

  let searchInputItem = document.querySelector("#search-input");
  let city = searchInputItem.value.trim().toLowerCase();

  let apiKey = "bc71af9e0b8fdta73d8ebob24352d13f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
  cityElement.innerHTML = city;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDate = document.querySelector("#current-date");
let currentTime = new Date();
let minutes = currentTime.getMinutes();
let day = currentTime.getDay();
let hours = currentTime.getHours();

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

currentDate.innerHTML = `${formattedDay} ${hours}:${minutes}`;
