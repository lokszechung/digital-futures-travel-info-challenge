import updateState from "../../utils/extractWeatherData"
import getLocationWeatherUtil from "../../utils/getLocationWeatherUtil";

import WeatherLocation from "../../components/WeatherComponents/WeatherLocation/WeatherLocation"
import WeatherToday from "../../components/WeatherComponents/WeatherToday/WeatherToday"
import WeatherWeekly from "../../components/WeatherComponents/WeatherWeekly/WeatherWeekly"

import "./LocationView.css"
import { useEffect, useState } from "react"

const LocationView = ({ search, savedLocations, setSavedLocations }) => {

  const [ weatherData, setWeatherData ] = useState(null)
  const [ days, setDays ] = useState([])
  const [ isLoading, setIsLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  const getWeatherData = async () => {
    try {
      setError(null)
      setIsLoading(true)
      const response = await getLocationWeatherUtil(search || localStorage.getItem("searchQuery"))
      setWeatherData(response.data)
    } 
    catch (e) {
      setError(e.response.data.cod)
    }
    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getWeatherData()
  }, [search])

  useEffect(() => {
    if (!isLoading && weatherData) {
      setDays(updateState(weatherData));
    }
  }, [isLoading]);

  return (
    <div className="location-view-container">
      {isLoading ? (
        <div className="spinner-border loading-icon" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
        {error ? (
          <p className="text-center fw-bold">{error === "404" ? `${search} is not a place, try searching again.` : `Error status: ${error}`}</p>
        ) : (
          <>
            {weatherData && days.length > 0 &&
              <>
                <WeatherLocation location={weatherData.city.name} savedLocations={savedLocations} setSavedLocations={setSavedLocations} />
                <WeatherToday weatherTodayData={days[0]} />
                <WeatherWeekly weatherWeeklyData={days.slice(1)} />
              </>  
            }   
          </>
        )}
        </>
      )}
    </div>
  )
}

export default LocationView