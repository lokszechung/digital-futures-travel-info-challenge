import updateState from "../utils/extractWeatherData"
import getLocationWeatherUtil from "../utils/getLocationWeatherUtil";

import WeatherLocation from "../components/WeatherLocation/WeatherLocation"
import WeatherToday from "../components/WeatherToday/WeatherToday"
import WeatherWeekly from "../components/WeatherWeekly/WeatherWeekly"

import "./LocationView.css"
import { useEffect, useState } from "react"

const LocationView = ({ search }) => {

  const [ weatherData, setWeatherData ] = useState(null)
  const [ error, setError ] = useState(null)
  const [ days, setDays ] = useState([])
  const [ location, setLocation ] = useState("")

  const getWeatherData = async () => {
    try{
      const response = await getLocationWeatherUtil(search || localStorage.getItem("searchQuery"))
      // console.log(response)
      setWeatherData(response.data)
    } 
    catch (e) {
      console.log(e)
      setError(e.message ? e.message : e)
    }
  }

  useEffect(() => {
    getWeatherData()
  }, [search])

  useEffect(() => {
    if(!weatherData){
      // console.log("loading")
      return
    }
    if(weatherData){
      // console.log(weatherData)
      setDays(updateState(weatherData))
      setLocation(weatherData.city.name)
    }
    // console.log(days)
  }, [weatherData])

  

  return (
    <div className="location-view-container">
      {weatherData ? 
      <>
        <WeatherLocation location={location}/>
        <WeatherToday weatherTodayData={days[0]}/>
        <WeatherWeekly weatherWeeklyData={days.slice(1)}/>
      </>
        :
        error ? 
        <p>{error}</p>
        :
        <p>loading...</p>
      }
    </div>
  )
}

export default LocationView