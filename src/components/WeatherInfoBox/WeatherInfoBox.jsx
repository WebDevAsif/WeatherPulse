import "./WeatherInfoBox.css";

export default function WeatherInfoBox({ info, name, addOn }) {
  return (
    <div className="weather-info-box" aria-label={`${name}: ${info}${addOn}`}>
      <div className="weather-info-box__content">
        <p className="weather-info-box__name">{name}</p>
        <p className="weather-info-box__info">
          {info}
          {addOn}
        </p>
      </div>
    </div>
  );
}
