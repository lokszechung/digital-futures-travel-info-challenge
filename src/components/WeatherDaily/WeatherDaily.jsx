import getDayName from "../../utils/getDayName"
import getImageUrl from "../../utils/getImageUrl"

import "./WeatherDaily.css"

const WeatherDaily = ({weatherDailyData}) => {

  if(!weatherDailyData){
    return <p>loading...</p>
  }

  const {date, icon, temp, weather_desc: desc} = weatherDailyData

  return (
    <div className="weather-daily-container">
      <p className="daily-date text-center">{getDayName(date)}</p>
      <img className="daily-icon" src={getImageUrl(icon)} />
      <p className="daily-temp">{`${Math.round(temp)}°C`}</p>
      <p className="daily-desc">{desc}</p>
    </div>
  )
}

export default WeatherDaily