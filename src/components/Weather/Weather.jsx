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

  const currentDate = new Date();
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedDate = currentDate.toLocaleDateString(undefined, dateOptions);
  const formattedTime = currentDate.toLocaleTimeString(undefined, timeOptions);

  useEffect(() => {
    document.title = `Weather in ${city} - ${weather}`;
  }, [city, weather]);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div className="weather-app row m-0">
      <div className="weather-app__left col col-lg-4">
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
      <div className="weather-app__right d-none d-lg-block col col-lg-8">
        <div className="dummy"></div>
        <div className="container d-none d-lg-block py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-10">
              <div
                className="card shadow-0 border border-dark border-5 text-dark"
                style={{ borderRadius: "10px" }}
              >
                <div className="card-body p-4">
                  <div className="row text-center">
                    <div
                      className="col-md-9 text-center border-end border-5 border-dark py-4"
                      style={{ marginTop: "-1.5rem", marginBottom: "-1.5rem" }}
                    >
                      <div className="d-flex justify-content-around mt-3">
                        <p className="small">Location: {weatherInfo.city}</p>
                        <p className="small">{formattedDate}</p>
                        <p className="small">Status: {weatherInfo.weather}</p>
                      </div>
                      <div className="d-flex justify-content-around align-items-center py-5 my-4">
                        <p className="fw-bold mb-0" style={{ fontSize: "7rem" }}>
                          {Math.round(weatherInfo.temp)}&deg;C
                        </p>
                        <div className="text-start d-flex align-items-center justify-content-center flex-column">
                          <p className="small ">{formattedTime}</p>
                          <p className="h3 mb-0">Sunday</p>
                          <p className="small ">{weatherInfo.weather}</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-around align-items-center mb-3">
                        <div className="flex-column">
                          <i className="fas fa-minus"></i>
                        </div>
                        <div
                          className="flex-column border"
                          style={{ borderRadius: "10px", padding: ".75rem" }}
                        >
                          <p className="small mb-1">Sun</p>
                          <p className="small mb-0">
                            <strong>-4°C</strong>
                          </p>
                        </div>
                        <div className="flex-column">
                          <p className="small mb-1">Mon</p>
                          <p className="small mb-0">
                            <strong>-4°C</strong>
                          </p>
                        </div>
                        <div className="flex-column">
                          <p className="small mb-1">Tue</p>
                          <p className="small mb-0">
                            <strong>-4°C</strong>
                          </p>
                        </div>
                        <div className="flex-column">
                          <p className="small mb-1">Wed</p>
                          <p className="small mb-0">
                            <strong>-4°C</strong>
                          </p>
                        </div>
                        <div className="flex-column">
                          <p className="small mb-1">Thu</p>
                          <p className="small mb-0">
                            <strong>-4°C</strong>
                          </p>
                        </div>
                        <div className="flex-column">
                          <p className="small mb-1">Fri</p>
                          <p className="small mb-0">
                            <strong>-4°C</strong>
                          </p>
                        </div>
                        <div className="flex-column">
                          <p className="small mb-1">Sat</p>
                          <p className="small mb-0">
                            <strong>-4°C</strong>
                          </p>
                        </div>
                        <div className="flex-column">
                          <i className="fas fa-minus"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 text-end">
                      <p className="small mt-3 mb-5 pb-5">For a month</p>
                      <p className="pb-1">
                        <span className="pe-2">11:00</span> <strong>-4°</strong>
                      </p>
                      <p className="pb-1">
                        <span className="pe-2">12:00</span> <strong>-4°</strong>
                      </p>
                      <p className="pb-1">
                        <span className="pe-2">13:00</span> <strong>-5°</strong>
                      </p>
                      <p className="pb-1">
                        <span className="pe-2">14:00</span> <strong>-7°</strong>
                      </p>
                      <p className="pb-1">
                        <span className="pe-2">15:00</span> <strong>-6°</strong>
                      </p>
                      <p className="pb-1">
                        <span className="pe-2">16:00</span> <strong>-4°</strong>
                      </p>
                      <p>
                        <span className="pe-2">17:00</span> <strong>-3°</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
