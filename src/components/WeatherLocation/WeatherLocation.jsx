import bookmark from "../../assets/bookmark.png"

import "./WeatherLocation.css"

const WeatherLocation = ({location}) => {
  function handleBookmark() {
    console.log("bookmark clicked")
  }

  return (
    <div className="location-text-container">
      <h2 className="text-center">Telling you about...</h2>
      <h2 className="text-center fw-bold">{location}</h2>
      <div className="bookmark pb-3">
        <img className="bookmark-icon me-2" src={bookmark} alt={"bookmark"} onClick={handleBookmark} />
        <p className="mb-0">Click to add to favourites</p>
      </div>
    </div>
  )
}

export default WeatherLocation