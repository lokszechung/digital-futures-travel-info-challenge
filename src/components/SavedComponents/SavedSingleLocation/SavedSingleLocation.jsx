import { useNavigate } from "react-router-dom"

import bookmarkFilled from "/public/assets/bookmark-filled.png"
import ConfirmUnsaveModal from "../ConfirmUnsaveModal/ConfirmUnsaveModal"

import "./SavedSingleLocation.css"

const SavedSingleLocation = ({ location, setSearch, savedLocations, setSavedLocations }) => {

  const navigate = useNavigate()

  function handleClickSaved(location) {
    setSearch(location)
    localStorage.setItem("searchQuery", location) 
    navigate("/location")
  }

  return (
    <>
      <div className="single-location">
        {/* location name has spaces removed below as well as in modal id because id cannot have a space */}
        <img className="saved-bookmark-icon" src={bookmarkFilled} alt={"bookmark"} data-bs-toggle="modal" data-bs-target={`#confirmUnsave${location.split(" ").join("")}Modal`} />
        <p className="single-location-name mb-0" onClick={() => {handleClickSaved(location)}}>{location}</p>
      </div>
      <ConfirmUnsaveModal location={location} savedLocations={savedLocations} setSavedLocations={setSavedLocations} />
    </>
  )
}

export default SavedSingleLocation