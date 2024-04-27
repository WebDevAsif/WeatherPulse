import { useState, useEffect } from "react";
import InfoBox from "../InfoBox/InfoBox";
import SearchBox from "../SearchBox/SearchBox";
import WeatherInfoBox from "../WeatherInfoBox/WeatherInfoBox";
import "./Weather.css";

export default function Weather() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "",
    temp: 0,
    tempMin: 0,
    tempMax: 0,
    humidity: 0,
    weather: "",
    feelsLike: 0,
    wind: 0,
    sunrise: 0,
    sunset: 0,
  });

  const { city, temp, weather, sunset } = weatherInfo;

  const sunsetTimeMilliseconds = sunset * 1000;
  const sunriseTimeMilliseconds = weatherInfo.sunrise * 1000;

  const sunsetDate = new Date(sunsetTimeMilliseconds);
  const sunriseDate = new Date(sunriseTimeMilliseconds);

  useEffect(() => {
    document.title = `Weather in ${city} - ${weather}`;
  }, [city, weather]);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather-app row">
      <div className="weather-app__left col col-lg-4">
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
      <div className="weather-app__right col col-lg-8">
        <div className="row">
          <div className="weather-app__details col-12">
            <p className="temperature">{Math.round(temp)}&deg;C</p>
          </div>
          <div className="weather-app__desc col-12">
            <div className="data-link">
              <p>
                All Data Provided By -{" "}
                <a href="https://openweathermap.org/">OpenWeather</a>
              </p>
            </div>
            <div className="social-link">
              <p>
                Design & Developed By - &nbsp;
                <a href="https://www.linkedin.com/in/asif-developer">Md Asif</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
