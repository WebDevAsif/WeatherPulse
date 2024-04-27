import "./SearchBox.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "9b3abc421e7315b52f324f2536cc029a";

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonRes = await response.json();
      const result = {
        city: jsonRes.name,
        weather: jsonRes.weather[0].main,
        temp: jsonRes.main.temp,
        humidity: jsonRes.main.humidity,
        tempMin: jsonRes.main.temp_min,
        tempMax: jsonRes.main.temp_max,
        feelsLike: jsonRes.main.feels_like,
        country: jsonRes.sys.country,
        wind: jsonRes.wind.speed,
        sunrise: jsonRes.sys.sunrise,
        sunset: jsonRes.sys.sunset,
        speed: jsonRes.wind.speed,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setCity("");
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <div className="SearchBox">
      <div className="search-widget">
        <form onSubmit={handleSubmit} aria-label="Weather search form" className="d-flex">
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City name"
            className="cityInput"
            value={city}
            onChange={handleChange}
            required
            aria-label="City name"
          />
          <button type="submit" aria-label="Search" className="">
            <SearchOutlinedIcon className="searchIcon" />
          </button>
        </form>
        {error && (
          <p className="errorMessage" style={{ color: "red" }}>
            No such place exists!
          </p>
        )}
      </div>
    </div>
  );
}
