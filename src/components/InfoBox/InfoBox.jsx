import React from "react";
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
import "./InfoBox.css";

export default function InfoBox({ info }) {
  // Time formatting
  const formatTime = (timestamp) => {
    if (!timestamp) return "N/A"; // Handle missing timestamps
    const date = new Date(timestamp * 1000); // Convert Unix to JS Date
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return date.toLocaleTimeString(undefined, options);
  };

  return (
    <div className="info-box">
      {/* Main Weather Details */}
      <div className="info-box__details">
        <p className="info-box__temp">
          {info.temp ? `${Math.round(info.temp)}°C` : "N/A"}
        </p>
        <p className="info-box__weather-unit">{info.weather || "N/A"}</p>
        <p className="info-box__city">{info.city || "Unknown Location"}</p>
      </div>
      <hr />
      {/* Additional Weather Info */}
      <div className="details">
        <div className="details-weather">
          <WeatherDetail
            icon={<ThermostatIcon />}
            label="Feels Like"
            value={info.feelsLike ? `${Math.round(info.feelsLike)}°C` : "N/A"}
          />
          <WeatherDetail
            icon={<AirIcon />}
            label="Weather"
            value={info.weather || "N/A"}
          />
          <WeatherDetail
            icon={<WaterDropIcon />}
            label="Humidity"
            value={info.humidity ? `${info.humidity}%` : "N/A"}
          />
          <WeatherDetail
            icon={<VisibilityIcon />}
            label="Wind"
            value={info.wind || "N/A"}
          />
          <WeatherDetail
            icon={<LightModeIcon />}
            label="Sunrise"
            value={formatTime(info.sunrise)}
          />
          <WeatherDetail
            icon={<SunsetIcon />}
            label="Sunset"
            value={formatTime(info.sunset)}
          />
        </div>
      </div>
      {/* Footer with Links */}
      <div className="weather-app__desc">
        <div className="social-info">
          <FooterLink
            text="All Data Provided By"
            href="https://openweathermap.org/"
            label="OpenWeather"
            icon={<LaunchIcon />}
          />
          <FooterLink
            text="Design & Developed By"
            href="https://www.linkedin.com/in/asif-developer"
            label="Md Asif"
            icon={<LinkedInIcon />}
          />
        </div>
      </div>
    </div>
  );
}

// Reusable Component for Weather Details
const WeatherDetail = ({ icon, label, value }) => (
  <div className="weather-details">
    {icon}
    <p>{label}</p>
    <p>{value}</p>
  </div>
);

// Reusable Component for Footer Links
const FooterLink = ({ text, href, label, icon }) => (
  <div className="data-link">
    <p>
      {text} -{" "}
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label} {icon}
      </a>
    </p>
  </div>
);
