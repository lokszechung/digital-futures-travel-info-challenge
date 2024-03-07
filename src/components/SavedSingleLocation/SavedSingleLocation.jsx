import bookmarkFilled from "../../assets/bookmark-filled.png"
import ConfirmUnsaveModal from "../ConfirmUnsaveModal/ConfirmUnsaveModal"

import "./SavedSingleLocation.css"

const SavedSingleLocation = ({ location, savedLocations, setSavedLocations }) => {

  return (
    <>
      <div className="single-location">
        {/* location name has spaces removed below as well as in modal id because id cannot have a space */}
        <img className="bookmark-icon"src={bookmarkFilled} alt={"bookmark"} data-bs-toggle="modal" data-bs-target={`#confirmUnsave${location.split(" ").join("")}Modal`} />
        <p className="single-location-name mb-0">{location}</p>
      </div>
      <ConfirmUnsaveModal location={location} savedLocations={savedLocations} setSavedLocations={setSavedLocations} />
    </>
  )
}

export default SavedSingleLocation