import bookmarkFilled from "../../assets/bookmark-filled.png"

import "./SavedSingleLocation.css"

const SavedSingleLocation = ({location}) => {
  function handleUnsave() {
    console.log("unsaved")
  }

  return (
    <div className="single-location">
      <img src={bookmarkFilled} alt={"bookmark"} onClick={handleUnsave}/>
      <p className="single-location-name mb-0">{location}</p>
    </div>
  )
}

export default SavedSingleLocation