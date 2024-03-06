import { useState, useEffect } from "react"

import bookmark from "../../assets/bookmark.png"
import bookmarkFilled from "../../assets/bookmark-filled.png"

import "./WeatherLocation.css"

const WeatherLocation = ({ location, savedLocations, setSavedLocations }) => {

  // const [ savedLocations, setSavedLocations ] = useState(JSON.parse(localStorage.getItem("savedLocations")))
  const [ locationIsSaved, setLocationIsSaved ] = useState(savedLocations ? savedLocations.includes(location) : false)

  useEffect(() => {
    console.log(savedLocations)
  }, [])
  

  function handleBookmark() {
    if(!locationIsSaved && savedLocations) {
      console.log("saving to existing key")
      const locationsToSave = [...savedLocations, location]
      console.log(locationsToSave)
      localStorage.setItem("savedLocations", JSON.stringify(locationsToSave))
      setSavedLocations(JSON.parse(localStorage.getItem("savedLocations")))
      return
    }
    if(!locationIsSaved && !savedLocations){
      console.log("saving to new key")
      localStorage.setItem("savedLocations", JSON.stringify([location]))
      setSavedLocations(JSON.parse(localStorage.getItem("savedLocations")))
      return 
    }
    if(locationIsSaved){
      console.log("removing location")
      const locationsToSave = [...savedLocations].filter(loc => loc !== location)
      console.log(locationsToSave)
      localStorage.setItem("savedLocations", JSON.stringify(locationsToSave))
      setSavedLocations(JSON.parse(localStorage.getItem("savedLocations")))
      return
    }
  }

  useEffect(() => {
    if (savedLocations) {
      setLocationIsSaved(savedLocations.includes(location));
    }
  }, [location, savedLocations])

  return (
    <div className="location-text-container">
      <h2 className="text-center">Telling you about...</h2>
      <h2 className="text-center fw-bold">{location}</h2>
      <div className="bookmark pb-3">
        <img className="bookmark-icon me-2" src={locationIsSaved ? bookmarkFilled : bookmark} alt={"bookmark"} onClick={handleBookmark} />
        <p className="mb-0">Click to add to favourites</p>
      </div>
    </div>
  )
}

export default WeatherLocation