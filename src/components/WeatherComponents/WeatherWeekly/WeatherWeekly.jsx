import "./WeatherWeekly.css"

import WeatherDaily from "../WeatherDaily/WeatherDaily"

const WeatherWeekly = ({ weatherWeeklyData, loading }) => {

  return (
    <div className="weather-weekly-container">
      {weatherWeeklyData.map(day => {
        return (<WeatherDaily key={day.date} weatherDailyData={day}/>)
      })}
      {}
    </div>
  )
}

export default WeatherWeekly