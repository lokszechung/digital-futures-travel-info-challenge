import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom"

import "./NavbarItems.css"

const NavbarItems = ({ setSearch, savedLocations }) => {

  const navigate = useNavigate()

  const siteLocation = useLocation()
  
  const [currentView, setCurrentView] = useState("")

  useEffect(() => {
    setCurrentView(siteLocation.pathname)
  }, [siteLocation])

  function handleClickSaved(location) {
    setSearch(location)
    localStorage.setItem("searchQuery", location) 
    navigate("/location")
  }

  return (
    <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
      <li className="nav-item">
        {/* I used onClick here rather than to="/" because I want to use data-bs-dismiss="offcanvas" here too */}
        <Link 
          className={`nav-link ${currentView === "/" ? "active" : "" }`} 
          onClick={() => {navigate("/")}} 
          data-bs-dismiss="offcanvas" 
          aria-current="page"
        >
          Home
        </Link>
      </li>
      {savedLocations.length > 0 ?
        <div className="nav-item dropdown d-flex align-items-center">
          <Link 
            className={`nav-link pe-0 ${currentView === "/saved" ? "active" : "" }`} 
            onClick={() => {navigate("/saved")}} 
            data-bs-dismiss="offcanvas" 
          >
            My Saved Locations
          </Link>
          <div className="position-relative">
            <div 
              className={`saved-dropdown-button dropdown-toggle ${currentView === "/saved" ? "active" : "" }`} 
              role="button" 
              data-bs-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false"
            >
            </div>
            <ul className="dropdown-menu position-absolute">
              {savedLocations.map((location) => {
                return <li key={location} className="dropdown-item" onClick={() => {handleClickSaved(location)}} data-bs-dismiss="offcanvas">{location}</li>
              })}
            </ul>
            </div>
        </div>
        :
        <></>
      }
    </ul>
  )
}

export default NavbarItems