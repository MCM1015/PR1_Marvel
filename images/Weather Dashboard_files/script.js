var apiKey = "69ad040071c6bd9e0fba40e9e25eb461";
var searchBtn = document.querySelector("#search-button");
var cityName = " ";
var currentCityName = document.querySelector("#city-name");
var currentCityTemp = document.querySelector("#c-temp");
var currentCityHumidity = document.querySelector("#c-humi");
var currentCityWindSpeed = document.querySelector("#c-ws");
var currentCityUV = document.querySelector("#c-uv");
var currentDay = document.querySelector("#c-day");
var icon = "";
var currentCityArray = JSON.parse(localStorage.getItem("cities")) || [];
var day1 = document.querySelector("#day-1");
var day2 = document.querySelector("#day-2");
var day3 = document.querySelector("#day-3");
var day4 = document.querySelector("#day-4");
var day5 = document.querySelector("#day-5");
var forecastSection = document.querySelector("#forecast-div");
var searchHistory = document.querySelector("#searchHistory");

window.onload = function () {
  forecastSection.style.display = "none";
};

// Search city
function searchCity() {
  cityName = document.getElementById("search-field").value;
  //console.log(cityName);
  getCityWeatherInfo(cityName);
  getForecast(cityName);
  currentCityName;
}

// Fetch weather information from API
function getCityWeatherInfo(cityName) {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    apiKey +
    "&units=imperial";
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var currentTemp = data.main.temp;
      var currentCity = data.name;
      console.log(currentCity);
      currentHumidity = data.main.humidity;
      currentWindSpeed = data.wind.speed;
      currentWindSpeed = data.wind.speed;
      icon = data.weather.icon;
      console.log("The current UV Index " + currentWindSpeed);
      var currentDay = data.dt;
      currentDay = moment().format("L");
      // console.log(currentDay);

      currentCityArray.push(currentCity);

      localStorage.setItem("City", currentCity);
      localStorage.setItem("Temperature", currentTemp);
      localStorage.setItem("Humidity", currentHumidity);
      localStorage.setItem("Wind Speed", currentWindSpeed);
      localStorage.setItem("Current Day", currentDay);
      localStorage.setItem("Icon", icon);
      localStorage.setItem("cities", JSON.stringify(currentCityArray));
    });
  displayWeatherInfo();
  forecastSection.style.display = "block";
}
function getForecast(cityName) {
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=" +
    apiKey +
    "&units=imperial";
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.list.length);
      console.log(data.city);
      console.log(data.city.name);

      for (var i = 0; i < data.list.length; i += 8) {
        futureDay = data.list[i].dt;
        futureTemp = JSON.stringify(data.list[i].main.temp);
        futureHumid = JSON.stringify(data.list[i].main.humidity);
        futureDay = moment.unix(futureDay).format("'MMMM Do YYYY, h:mm:ss a'");
        console.log("The day is " + futureDay);
        console.log("The Temp is " + futureTemp);
        console.log("The Humidity is " + futureHumid);

        localStorage.setItem = ("Days", JSON.stringify(data.list[i].dt));
        newLabel = document.createElement("button");
        newLabel.textContent = cityName.value;
        searchHistory.appendChild(newLabel);

        $(`
          <div class="custom-card">
            <p>${futureDay}</p>
            <p>Icon</p>
            <p>Temperature: ${futureTemp}</p>
            <p>Humidity: ${futureHumid}</p>
            <p>Uv Index: ${futureHumid}</p>
          </div>
        `).appendTo("#forecast-div");
      }
    });
}
// Display Weather Back to User
function displayWeatherInfo() {
  currentCityName.textContent = localStorage.getItem("City");
  currentCityTemp.textContent = localStorage.getItem("Temperature");
  currentCityHumidity.textContent = localStorage.getItem("Humidity");
  currentCityWindSpeed.textContent = localStorage.getItem("Wind Speed");
  currentDay.textContent = localStorage.getItem("Current Day");
  //icon.value = localStorage.getItem("Icon");
}
// Store weather information to local storage
function storeWeatherInfo() {}
// Show search history
function displaySearchHistory() {
  for (var i = 0; i < currentCityArray.length; i++) {
    $(`
          <div class="custom-card">
            <p>${futureDay}</p>
          </div>
        `).appendTo("#forecast-div");
  }
}
//searchCity();
//searchBtn.addEventListener("click", searchCity);
searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  searchCity();
  document.getElementById("search-field").value = " ";
  displaySearchHistory();
});
