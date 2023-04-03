const API_KEY = "e4e4e6e419ea30d100b6232c87f0835c";

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
    });
};

const onGeoError = () => {
  alert("당신을 찾을 수 없습니다.");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
