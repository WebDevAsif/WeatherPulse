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

  const defaultWeatherImage =
    "https://images.pexels.com/photos/681391/pexels-photo-681391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const weatherImages = {
    Rain: "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    Clouds:
      "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=600",
    Haze: "https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=600",
    Clear:
      "https://images.pexels.com/photos/8637245/pexels-photo-8637245.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    Mist: "https://images.pexels.com/photos/358235/pexels-photo-358235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };

  const defaultTitle = "Weather App"; // Default title

  const { city, weather } = weatherInfo;

  useEffect(() => {
    if (city) {
      document.title = `Weather in ${city} - ${weather}`;
    } else {
      document.title = defaultTitle;
    }
  }, [city, weather]);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  const backgroundImageUrl = weatherImages[weatherInfo.weather] || defaultWeatherImage;

  return (
    <div className="weather">
      {/* Wallpaper Layer */}
      <div
        className="weather-wallpaper"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      ></div>

      {/* Foreground Content */}
      <div className="weather-content">
        <div className="weather-app">
          <SearchBox updateInfo={updateInfo} />
          <InfoBox info={weatherInfo} />
        </div>
      </div>
    </div>
  );
}
