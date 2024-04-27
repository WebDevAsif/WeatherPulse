import "./InfoBox.css";
import { useEffect, useState } from "react";
import genWeather from "../../assets/weather_icons/static/weather.svg";

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

  const weatherCondition = info.weather;
  const backgroundImageUrl =
    weatherImages[weatherCondition] ||
    "https://images.unsplash.com/photo-1632117761686-00fb43fe5d9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bm55JTIwd2VhdGhlcnxlbnwwfDB8MHx8fDA%3D%3D";

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const options = {
    weekday: "long", // 'short', 'long'
    day: "numeric", // 'numeric', '2-digit'
    month: "long", // 'numeric', '2-digit', 'short', 'long'
    year: "numeric", // 'numeric', '2-digit'
    hour: "numeric", // 'numeric', '2-digit'
    minute: "numeric", // 'numeric', '2-digit'
    second: "numeric", // 'numeric', '2-digit'
    hour12: true, // true (12-hour clock), false (24-hour clock)
  };

  const formattedDateTime = currentDateTime.toLocaleString(undefined, options);

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
    hour12: true,
  };

  const dateOptions = {
    month: "long",
    year: "numeric",
    day: "numeric",
  };

  const weekdayOptions = {
    weekday: "long",
  };

  const formattedTime = currentDateTime.toLocaleTimeString(undefined, timeOptions);
  const formattedDate = currentDateTime.toLocaleDateString(undefined, dateOptions);
  const formattedWeekday = currentDateTime.toLocaleDateString(undefined, weekdayOptions);

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let isDay = currentHour > 6 && currentHour < 18;

  return (
    <div className="info-box">
      <img src={genWeather} alt="NormalWeather" />
      <div className="info-box__details">
        <p className="info-box__temp">{Math.round(info.temp)}&deg;C</p>
        <p className="info-box__weather-unit">{info.weather}</p>
        <p className="info-box__city">{info.city}</p>
      </div>
      <hr />
      <div className="details">
        <p className="details-temp">Temperature: {info.temp}&deg;C</p>
        <hr />
        <p className="details-max">Min. Temperature: {info.tempMin}&deg;C</p>
        <hr />
        <p className="details-max">Max. Temperature: {info.tempMax}&deg;C</p>
        <hr />
        <p className="details-max">Humidity: {info.humidity}</p>
        <hr />
        <p className="details-max">Feels Like: {info.feelsLike}&deg;C</p>
      </div>
    </div>
  );
}
