

const apikey = "40ed2e68f070197892b747621d74f895";
const weatherdatain = document.querySelector("#weather-data");
const citynameE1 = document.querySelector("#city-input");
const formE1 = document.querySelector("form");

formE1.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityvalue = citynameE1.value;
    getWhetherData(cityvalue);
});

async function getWhetherData(cityvalue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${apikey}&units=metric`);
        if (!response.ok) {
            throw new Error("Network response is not ok");
        }
        const data = await response.json();
        const temp = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like ${Math.round(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed} m/s`
        ];

        weatherdatain.querySelector(".icon img").src = `https://openweathermap.org/img/wn/${icon}.png`;
        weatherdatain.querySelector(".temp").textContent = `${temp}°C`;
        weatherdatain.querySelector(".description").textContent = description;
        weatherdatain.querySelector(".details").innerHTML = details.map(detail => `<div class="flex">${detail}</div>`).join("");
    } catch (error) {
        console.error("Error fetching weather data:", error);
        weatherdatain.querySelector(".icon").innerHTML = "";
        weatherdatain.querySelector(".temperature").textContent = "";
        weatherdatain.querySelector(".description").textContent =
        "An error happened, please try again later";
        weatherdatain.querySelector(".details").innerHTML = "";
    }
}
// const apikey = "40ed2e68f070197892b747621d74f895";

// const weatherDataEl = document.getElementById("weather-data");

// const cityInputEl = document.getElementById("city-input");

// const formEl = document.querySelector("form");

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const cityValue = cityInputEl.value;
//   getWeatherData(cityValue);
// });

// async function getWeatherData(cityValue) {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`
//     );

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json();

//     const temperature = Math.round(data.main.temp);

//     const description = data.weather[0].description;

//     const icon = data.weather[0].icon;

//     const details = [
//       `Feels like: ${Math.round(data.main.feels_like)}`,
//       `Humidity: ${data.main.humidity}%`,
//       `Wind speed: ${data.wind.speed} m/s`,
//     ];

//     weatherDataEl.querySelector(".icon img").src = `https://openweathermap.org/img/wn/${icon}.png`;
//     weatherDataEl.querySelector(
//       ".temperature"
//     ).textContent = `${temperature}°C`;
//     weatherDataEl.querySelector(".description").textContent = description;

//     weatherDataEl.querySelector(".details").innerHTML = details
//       .map((detail) => `<div>${detail}</div>`)
//       .join("");
//   } catch (error) {
//     weatherDataEl.querySelector(".icon").innerHTML = "";
//     weatherDataEl.querySelector(".temperature").textContent = "";
//     weatherDataEl.querySelector(".description").textContent =
//       "An error happened, please try again later";

//     weatherDataEl.querySelector(".details").innerHTML = "";
//   }
// }
