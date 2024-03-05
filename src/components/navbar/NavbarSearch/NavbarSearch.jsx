
import { useState, useRef } from "react"
import { useNavigate } from 'react-router-dom'
import searchIcon from "../../../assets/search-icon.svg"

import "./NavbarSearch.css"

const NavbarSearch = ({ setSearch }) => {

  const navigate = useNavigate()
  const inputRef = useRef(null)

  // this state tracks the search input for the navbar
  // instead of modifying directly the state of "search" state
  // to ensure that a call to weather api is not made each time a letter is typed
  // because a call is made everytime search changes (only when in location view)
  const [toSearch, setToSearch] = useState("")

  const handleSearchInput = (e) => {
    setToSearch(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    setSearch(toSearch)
    setToSearch("")
    localStorage.setItem("searchQuery", toSearch) 
    inputRef.current.blur()
    navigate("/location")
  }

  return (
    <form className="d-flex nav-search" role="search" onSubmit={handleSearchSubmit}>
      <input className="form-control" type="search" placeholder="Search" value={toSearch} ref={inputRef} onChange={handleSearchInput} />
      <button className="btn" type="submit"><img className="search-icon" src={searchIcon} alt="search icon" /></button>
    </form>
  )
}

export default NavbarSearch