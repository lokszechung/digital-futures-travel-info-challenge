import Navbar from "../components/Navbar/Navbar"
import bg from "../assets/home-bg.jpg"

import "./HomeView.css"
import HomeLocationSearch from "../components/HomeLocationSearch/HomeLocationSearch"

const HomeView = () => {
  return (
    <>
      <div className="container-fluid home vh-100 p-0 d-flex justify-content-center align-items-center">
        <HomeLocationSearch />
      </div>
    </>
    
  )
}

export default HomeView