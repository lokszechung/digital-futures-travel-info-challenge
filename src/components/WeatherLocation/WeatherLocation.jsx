import "./WeatherLocation.css"

const WeatherLocation = ({location}) => {
  return (
    <div className="location-text-container">
      <h2 className="text-center">Telling you about...</h2>
      <h2 className="text-center fw-bold">{location}</h2>
      <p className="text-center">Click to add to favourites</p>
    </div>
  )
}

export default WeatherLocation