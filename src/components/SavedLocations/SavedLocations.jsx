import SavedSingleLocation from "../SavedSingleLocation/SavedSingleLocation"
import sortLocations from "../../utils/sortLocations"

import "./SavedLocations.css"

const SavedLocations = () => {

  const savedLocations = ["London", "New York", "Hong Kong", "Manchester", "Brighton", "Los Angeles", "Busan"]
  const orderedLocations = sortLocations(savedLocations)

  return (
    <div className="saved-locations">
      {orderedLocations.map(location => {
        return <SavedSingleLocation key={location} location={location} />
      })}
    </div>
  )
    
  
}

export default SavedLocations
