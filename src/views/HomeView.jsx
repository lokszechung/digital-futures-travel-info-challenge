import Navbar from "../components/navbar/Navbar"
import bg from "../assets/home-bg.jpg"

import "./HomeView.css"
import TellMeAbout from "../components/TellMeAbout"

const HomeView = () => {
  return (
    <>
      <div className="container-fluid home vh-100 p-0 d-flex justify-content-center align-items-center">
        {/* <img src={bg} alt="Background" className="w-100 h-100 object-fit-cover" /> */}
        <TellMeAbout />
      </div>
    </>
    
  )
}

export default HomeView