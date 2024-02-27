import "./WeatherWeekly.css"

import WeatherDaily from "../WeatherDaily/WeatherDaily"

const WeatherWeekly = () => {
  return (
    <div className="weather-weekly-container d-flex justify-content-between align">
      <WeatherDaily  />
      <WeatherDaily  />
      <WeatherDaily  />
      <WeatherDaily  />
    </div>
  )
}

export default WeatherWeekly