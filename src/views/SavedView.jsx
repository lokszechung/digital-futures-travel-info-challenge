import SavedTitle from "../components/SavedTitle/SavedTitle"
import SavedLocations from "../components/SavedLocations/SavedLocations"

import "./SavedView.css"

const SavedView = ({ savedLocations, setSavedLocations }) => {
  return (
    <div className="saved-view-container">
      <SavedTitle />
      <SavedLocations savedLocations={savedLocations} setSavedLocations={setSavedLocations} />
    </div>
  )
}

export default SavedView