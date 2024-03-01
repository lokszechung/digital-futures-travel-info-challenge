import SavedTitle from "../components/SavedTitle/SavedTitle"
import SavedLocations from "../components/SavedLocations/SavedLocations"

import "./SavedView.css"

const SavedView = () => {
  return (
    <div className="saved-view-container">
      <SavedTitle />
      <SavedLocations />
    </div>
  )
}

export default SavedView