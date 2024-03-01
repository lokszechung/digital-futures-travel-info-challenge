import bookmarkFilled from "../../assets/bookmark-filled.png"

import "./SavedTitle.css"

const SavedTitle = () => {
  return (
    <div className="saved-title-container">
      <h2 className="text-center">Telling you about...</h2>
      <h2 className="text-center fw-bold">Favourite locations</h2>
      <div className="saved-view-bookmark d-flex align-items-center mt-4">
        <p className="mb-0">Click</p>
        <img className="saved-view-bookmark-icon mx-2" src={bookmarkFilled} alt={"bookmark"} />
        <p className="mb-0">to remove from favourites</p>
      </div>
      <p>Click name to view info</p>
    </div>
  )
}

export default SavedTitle