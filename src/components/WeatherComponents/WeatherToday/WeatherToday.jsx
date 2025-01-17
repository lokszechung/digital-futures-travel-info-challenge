import getImageUrl from "../../../utils/getImageUrl"
import formatDate from "../../../utils/formatDate"

import "./WeatherToday.css"

const WeatherToday = ({ weatherTodayData }) => {

  const {date, icon, temp, weather_desc: desc} = weatherTodayData

  return (
    <div className="weather-today-container" data-testid="weather-today">
      <h4 className="text-center fw-bold">Today's Weather:</h4>
      <p className="today-date text-center">{formatDate(date)}</p>
      <div className="today-info-icon d-flex">
        <img className="today-icon" src={getImageUrl(icon)} alt={icon} />
        <div className="today-info">
          <p className="today-temp">{`${Math.round(temp)}°C`}</p>
          <p className="today-desc">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherToday