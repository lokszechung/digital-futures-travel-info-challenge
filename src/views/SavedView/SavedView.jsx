import SavedTitle from "../../components/SavedComponents/SavedTitle/SavedTitle"
import SavedLocations from "../../components/SavedComponents/SavedLocations/SavedLocations"

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