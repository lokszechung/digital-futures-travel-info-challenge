import logo from "../../assets/weather.png"
import { Link, useLocation } from "react-router-dom"

import NavbarSearch from "./NavbarSearch/NavbarSearch"
import NavbarItems from "./NavbarItems/NavbarItems"

import "./Navbar.css"

const Navbar = ({ search, setSearch, savedLocations, setError }) => {
  const siteLocation = useLocation()
  const isHomeView = siteLocation.pathname === "/"

  // console.log("navbar:::", setError)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid px-5">
        <Link className="navbar-brand d-flex align-items-center" to="/"><img className="logo" src={logo} alt="weathervane logo" /></Link>
        <button className="navbar-toggler border-0 px-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><img className="logo" src={logo} alt="weathervane logo" /></h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
              <NavbarItems setSearch={setSearch} savedLocations={savedLocations} setError={setError} />
            {isHomeView ? <></> : <NavbarSearch search={search} setSearch={setSearch} setError={setError} />}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar