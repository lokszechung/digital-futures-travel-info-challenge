const ConfirmUnsaveModal = ({ location, savedLocations, setSavedLocations }) => {

  function handleUnsave() {
    const locationsToSave = [...savedLocations].filter(loc => loc !== location)
    localStorage.setItem("savedLocations", JSON.stringify(locationsToSave))
    setSavedLocations(JSON.parse(localStorage.getItem("savedLocations")))
  }

  return (
    <div className="modal fade" id={`confirmUnsave${location.split(" ").join("")}Modal`} tabIndex="-1" aria-labelledby="confirmUnsaveModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Unsave location</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Unsave {location} from favourites? 
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary" onClick={handleUnsave} data-bs-dismiss="modal">Unsave</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ConfirmUnsaveModal