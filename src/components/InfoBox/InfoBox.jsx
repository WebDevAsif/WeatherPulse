import React, { useState, useEffect } from "react";
import {
  Thermostat as ThermostatIcon,
  WaterDrop as WaterDropIcon,
  LightMode as LightModeIcon,
  Air as AirIcon,
  Visibility as VisibilityIcon,
  Brightness4 as SunsetIcon,
} from "@mui/icons-material";
import { Launch as LaunchIcon } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import genWeather from "../../assets/weather_icons/static/weather.svg";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const weatherImages = {
    Rain: "https://images.unsplash.com/photo-1566996675874-f00a61522322?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYXRoZXJ8ZW58MHwwfDB8fHww",
    Cloud:
      "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=600",
    Haze: "https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=600",
    Sunny:
      "https://images.unsplash.com/photo-1542923910-f391dea9f674?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VubnklMjB3ZWF0aGVyfGVufDB8MHwwfHx8MA%3D%3D",
    Clear:
      "https://images.unsplash.com/photo-1632117761686-00fb43fe5d9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bm55JTIwd2VhdGhlcnxlbnwwfDB8MHx8fDA%3D%3D",
  };

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
  const sunsetTimeMilliseconds = info.sunset * 1000;
  const sunriseTimeMilliseconds = info.sunrise * 1000;
  const setTime = new Date(sunsetTimeMilliseconds);
  const riseTime = new Date(sunriseTimeMilliseconds);
  const sunsetTime = setTime.toLocaleTimeString(undefined, timeOptions);
  const sunriseTime = riseTime.toLocaleTimeString(undefined, timeOptions);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const weatherCondition = info.weather;
  const backgroundImageUrl =
    weatherImages[weatherCondition] ||
    "https://images.unsplash.com/photo-1632117761686-00fb43fe5d9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bm55JTIwd2VhdGhlcnxlbnwwfDB8MHx8fDA%3D%3D";

  return (
    <div className="info-box">
      {/* <img src={genWeather} alt="NormalWeather" /> */}
      <div className="info-box__details">
        <p className="info-box__temp">{Math.round(info.temp)}&deg;C</p>
        <p className="info-box__weather-unit">{info.weather}</p>
        <p>Feels Like {Math.floor(info.feelsLike)}</p>
        <p className="info-box__city">{info.city}</p>
      </div>
      <hr />
      <div className="details">
        <div className="details-weather">
          <div className="weather-details">
            <ThermostatIcon />
            <p>Feels Like</p>
            <p>{info.feelsLike}&deg;C</p>
          </div>
          <div className="weather-details">
            <AirIcon />
            <p>Weather</p>
            <p>{info.weather}</p>
          </div>
          <div className="weather-details">
            <WaterDropIcon />
            <p>Humidity</p>
            <p>{info.humidity}%</p>
          </div>
          <div className="weather-details">
            <VisibilityIcon />
            <p>Wind</p>
            <p>{info.wind}</p>
          </div>
          <div className="weather-details">
            <LightModeIcon />
            <p>Sunrise</p>
            <p>{sunriseTime}</p>
          </div>
          <div className="weather-details">
            <SunsetIcon />
            <p>Sunset</p>
            <p>{sunsetTime}</p>
          </div>
        </div>
      </div>
      <div className="weather-app__desc mt-5">
        <div className="row row-cols-1 social-info">
          <div className="data-link col">
            <p>
              All Data Provided By -
              <a href="https://openweathermap.org/">
                OpenWeather <LaunchIcon />
              </a>
            </p>
          </div>
          <div className="social-link col">
            <p>
              Design & Developed By -
              <a href="https://www.linkedin.com/in/asif-developer">
                <LinkedInIcon /> Md Asif
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
