import "./WeeklyWeather.css"

import DailyWeather from "../dailyWeather/DailyWeather"

const WeeklyWeather = () => {
  return (
    <div className="weekly-weather-container container d-flex justify-content-between">
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
    </div>
  )
}

export default WeeklyWeather