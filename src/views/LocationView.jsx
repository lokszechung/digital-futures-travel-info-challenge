import updateState from "../utils/extractWeatherData"
import getLocationWeatherUtil from "../utils/getLocationWeatherUtil";

import WeatherLocation from "../components/WeatherLocation/WeatherLocation"
import WeatherToday from "../components/WeatherToday/WeatherToday"
import WeatherWeekly from "../components/WeatherWeekly/WeatherWeekly"

import "./LocationView.css"
import { useEffect, useState } from "react"

const LocationView = ({ search, savedLocations, setSavedLocations, error, setError }) => {

  const [ weatherData, setWeatherData ] = useState(null)
  const [ days, setDays ] = useState([])

  const getWeatherData = async () => {
    try {
      const response = await getLocationWeatherUtil(search || localStorage.getItem("searchQuery"))
      setWeatherData(response.data)
    } 
    catch (e) {
      setError(e.response.data.cod)
    }
  }

  useEffect(() => {
    getWeatherData()
  }, [search])

  useEffect(() => {
    if(!weatherData){
      return
    }
    if(weatherData){
      setDays(updateState(weatherData))
    }
  }, [weatherData])

  return (
    <div className="location-view-container">
      {weatherData && !error && 
        <>
          <WeatherLocation location={weatherData.city.name} savedLocations={savedLocations} setSavedLocations={setSavedLocations}/>
          <WeatherToday weatherTodayData={days[0]}/>
          <WeatherWeekly weatherWeeklyData={days.slice(1)}/>
        </>
      }
      {!weatherData && !error &&
          <div className="spinner-border loading-icon" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
      }
      {error &&
        <p className="text-center fw-bold">{error === "404" ? `${search} is not a place, try searching again.` : `Error status: ${error}`}</p>
      }
    </div>
  )
}

export default LocationView