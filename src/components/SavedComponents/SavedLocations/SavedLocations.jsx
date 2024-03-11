import { useState, useEffect } from "react"

import SavedSingleLocation from "../SavedSingleLocation/SavedSingleLocation"
import sortLocations from "../../../utils/sortLocations"
import useScreenSize from "../../../hooks/useScreenSize"

import "./SavedLocations.css"

const SavedLocations = ({ setSearch, savedLocations, setSavedLocations }) => {

  const screenSize = useScreenSize()

  const [ orderedLocations, setOrderedLocations ] = useState([])

  useEffect(() => {
    setOrderedLocations(sortLocations(savedLocations, screenSize))
  }, [screenSize, savedLocations])

  return (
    <div className="saved-locations">
      {orderedLocations.map(location => {
        return <SavedSingleLocation key={location} location={location} setSearch={setSearch} savedLocations={savedLocations} setSavedLocations={setSavedLocations} />
      })}
    </div>
  )
}

export default SavedLocations
