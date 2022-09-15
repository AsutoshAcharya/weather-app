const button = document.querySelector(".btn");

function fetchApi() {
  const input = document.querySelector(".input").value;
  const key = "6cb207cac8143b46848762807421e332";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => result(data))
    .catch((error) => {
      const heading = document.querySelector(".heading");
      heading.textContent = `Enter valid city name`;
    });
}

button.addEventListener("click", () => {
  fetchApi();
});

function result(data) {
  const input = document.querySelector(".input").value;
  const heading = document.querySelector(".heading");
  const temp = document.querySelector(".temp");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");

  heading.textContent = `Temperature in ${input}`;
  temp.textContent = `Temperature: ${Math.floor(data.main.temp - 273.15)}°C`;
  humidity.textContent = `Humidity: ${data.main.humidity}`;
  wind.textContent = `Wind-Speed: ${data.wind.speed} km/hr`;
}

const input = document.querySelector(".input");
input.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    fetchApi();
  }
});
