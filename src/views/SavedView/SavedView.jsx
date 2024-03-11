import SavedTitle from "../../components/SavedComponents/SavedTitle/SavedTitle"
import SavedLocations from "../../components/SavedComponents/SavedLocations/SavedLocations"

import "./SavedView.css"

const SavedView = ({ setSearch, savedLocations, setSavedLocations }) => {
  return (
    <div className="saved-view-container">
      <SavedTitle />
      <SavedLocations setSearch={setSearch} savedLocations={savedLocations} setSavedLocations={setSavedLocations} />
    </div>
  )
}

export default SavedView