import "./WeatherWeekly.css"

import WeatherDaily from "../WeatherDaily/WeatherDaily"

const WeatherWeekly = ({ weatherWeeklyData, loading }) => {

  if(!weatherWeeklyData){
    return (
      <div className="weather-weekly-container">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

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