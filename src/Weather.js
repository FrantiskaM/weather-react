import { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [results, setResults] = useState({ ready: false });

  function showWeather(response) {
    setResults({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidty,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleChange(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=082d3d02ffdb12f2fd9b259e2ced1d0da&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleResponse(event) {
    setCity(event.target.value);
  }

  let form = (
    <div>
      <form onSubmit={handleChange}>
        <input type="Search" onChange={handleResponse}></input>
        <button>Submit</button>
      </form>
    </div>
  );

  if (results.ready) {
    return (
      <div>
        <ul>
          <li>Temperature: {Math.round(results.temperature)}</li>
          <li>Description: {results.description}</li>
          <li>Humidity: {results.humidity}</li>
          <li>Wind: {results.wind}</li>
          <li>
            <img src={results.icon} alt="weather-icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
