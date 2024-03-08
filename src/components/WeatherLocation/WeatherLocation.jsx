import { useState, useEffect } from "react"

import bookmark from "../../assets/bookmark.png"
import bookmarkFilled from "../../assets/bookmark-filled.png"

import "./WeatherLocation.css"

const WeatherLocation = ({ location, savedLocations, setSavedLocations }) => {

  const [ locationIsSaved, setLocationIsSaved ] = useState(savedLocations ? savedLocations.includes(location) : false)  

  function handleBookmark() {
    let updatedLocations = []
    
    if (!locationIsSaved) {
      updatedLocations = savedLocations ? [...savedLocations, location] : [location]
    } 
    if (locationIsSaved) {
      updatedLocations = savedLocations.filter(loc => loc !== location)
    }
    localStorage.setItem("savedLocations", JSON.stringify(updatedLocations))
    setSavedLocations(JSON.parse(localStorage.getItem("savedLocations")))
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
        <p className="mb-0">Click to {locationIsSaved ? "remove from" : "add to"} favourites</p>
      </div>
    </div>
  )
}

export default WeatherLocation