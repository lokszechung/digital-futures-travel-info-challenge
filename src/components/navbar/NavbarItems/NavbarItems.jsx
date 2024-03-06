import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom"

import "./NavbarItems.css"

const NavbarItems = ({ setSearch, savedLocations }) => {

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
        <Link to="/" className={`nav-link ${currentView === "/" ? "active" : "" }`} aria-current="page">Home</Link>
      </li>
      <li className="nav-item dropdown">
        <Link to="/saved" className={`nav-link dropdown-toggle ${currentView === "/saved" ? "active" : "" }`} role="button" data-mdb-toggle="dropdown" aria-expanded="false">
          My Saved Locations
        </Link>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {savedLocations.map((location) => {
            return <li key={location} className="dropdown-item" onClick={() => {handleClickSaved(location)}}>{location}</li>
          })}
        </ul>
      </li>
    </ul>
  )
}

export default NavbarItems