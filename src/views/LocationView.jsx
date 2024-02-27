import WeatherLocation from "../components/WeatherLocation/WeatherLocation"
import WeatherToday from "../components/WeatherToday/WeatherToday"
import WeatherWeekly from "../components/WeatherWeekly/WeatherWeekly"

import "./LocationView.css"

const LocationView = () => {
  return (
    <div className="location-view-container">
      <WeatherLocation />
      <WeatherToday />
      <WeatherWeekly />
    </div>
    
  )
}

export default LocationView