import React, { useState, useEffect } from "react";
import InfoBox from "../InfoBox/InfoBox";
import SearchBox from "../SearchBox/SearchBox";
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

  const { city, temp, weather } = weatherInfo;

  useEffect(() => {
    document.title = `Weather in ${city} - ${weather}`;
  }, [city, weather]);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  console.log(weatherInfo);
  return (
    <div className="weather-app row m-0">
      <div className="weather-app__left col col-lg-4">
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
      <div className="weather-app__right col col-lg-8">
        <div className="dummy"></div>
        <div className="row">
          <div className="weather-app__details col">
            <p className="temperature">{Math.round(temp)}&deg;C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
