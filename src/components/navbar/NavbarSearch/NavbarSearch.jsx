import searchIcon from "../../../assets/search-icon.svg"

import "./NavbarSearch.css"

const NavbarSearch = () => {
  return (
    <form className="d-flex nav-search" role="search">
      <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn" type="submit"><img className="search-icon" src={searchIcon} alt="search icon" /></button>
    </form>
  )
}

export default NavbarSearch