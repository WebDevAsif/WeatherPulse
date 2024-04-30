import "./SearchBox.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
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
        <form
          className="form"
          onSubmit={handleSubmit}
          aria-label="Weather search form"
          role="search"
        >
          <input
            className="form-input"
            type="search"
            id="city"
            name="city"
            placeholder="Enter city name"
            value={city}
            onChange={handleChange}
            required
            aria-label="City name"
          />
          <Button className="button" aria-label="Search" type="submit">
            <SearchOutlinedIcon className="fs-2" />
          </Button>
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
