
import { useState, useRef } from "react"
import { useNavigate } from 'react-router-dom'
import searchIcon from "/public/assets/search-icon.svg"

import "./NavbarSearch.css"

const NavbarSearch = ({ setSearch }) => {

  const navigate = useNavigate()
  const inputRef = useRef(null)

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const inputValue = inputRef.current.value
    if (inputValue) {
      setSearch(inputValue )
      localStorage.setItem("searchQuery", inputValue) 
      inputRef.current.value = ""
      navigate("/location")
    }
    inputRef.current.blur()
  }

  return (
    <form className="d-flex nav-search" role="search" data-testid="navbar-search" onSubmit={handleSearchSubmit}>
      <input className="form-control" type="search" placeholder="Search" ref={inputRef} />
      <button className="btn" type="submit"><img className="search-icon" src={searchIcon} alt="search icon" /></button>
    </form>
  )
}

export default NavbarSearch