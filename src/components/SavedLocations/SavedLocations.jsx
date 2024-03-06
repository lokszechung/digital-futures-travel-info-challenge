import { useState, useEffect } from "react"

import SavedSingleLocation from "../SavedSingleLocation/SavedSingleLocation"
import sortLocations from "../../utils/sortLocations"
import useScreenSize from "../../hooks/useScreenSize"

import "./SavedLocations.css"

const SavedLocations = ({ savedLocations, setSavedLocations }) => {

  const screenSize = useScreenSize()

  const [ orderedLocations, setOrderedLocations ] = useState([])

  // const savedLocations = ["Accra", "Birmingham", "Chicago", "Dubai", "Edinburgh", "Frankfurt", "Gold Coast"]

  useEffect(() => {
    setOrderedLocations(sortLocations(savedLocations, screenSize))
  }, [screenSize])

  return (
    <div className="saved-locations">
      {orderedLocations.map(location => {
        return <SavedSingleLocation key={location} location={location} />
      })}
    </div>
  )
}

export default SavedLocations
