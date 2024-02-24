import TellingYouAbout from "../components/tellingYouAbout/TellingYouAbout"
import TodayWeather from "../components/todayWeather/TodayWeather"
import WeeklyWeather from "../components/weeklyWeather/WeeklyWeather"
// import Footer from "../components/footer/Footer"

import "./LocationView.css"

const LocationView = () => {
  return (
    <div className="location-view-container">
      <TellingYouAbout />
      <TodayWeather />
      <WeeklyWeather />
      {/* <Footer /> */}
    </div>
    
  )
}

export default LocationView