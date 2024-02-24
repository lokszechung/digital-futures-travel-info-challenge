import Navbar from "../components/navbar/Navbar"
import bg from "../assets/home-bg.jpg"

import "./HomeView.css"
import TellMeAbout from "../components/tellMeAbout/TellMeAbout"

const HomeView = () => {
  return (
    <>
      <div className="container-fluid home vh-100 p-0 d-flex justify-content-center align-items-center">
        <TellMeAbout />
      </div>
    </>
    
  )
}

export default HomeView