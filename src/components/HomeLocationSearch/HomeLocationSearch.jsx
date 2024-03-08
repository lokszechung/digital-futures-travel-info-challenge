import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'

import "./HomeLocationSearch.css"

const HomeLocationSearch = ({ search, setSearch, setError }) => { 

  const navigate = useNavigate()
  const inputRef = useRef(null)

  // const handleSearchInput = (e) => {
  //   setSearch(e.target.value)
  // }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const inputValue = inputRef.current.value
    if (inputValue) {
      setSearch(inputRef.current.value)
      localStorage.setItem("searchQuery", inputRef.current.value) 
      setError(null)
      navigate("/location")
    }
    
  }

  return (
    <div className="tell-container">
      <h2 className="text-center tell">Tell me about...</h2>
      <form className="d-flex row justify-content-center align-items-center" onSubmit={handleSearchSubmit}>
        <input className="rounded py-2 mt-4" type="text" name="searchInput" ref={inputRef} placeholder="E.g. London, Paris, Hong Kong..." />
        <button type="submit" className="btn btn-primary w-50 mt-3">Search</button>
      </form>
    </div>
  )
}

export default HomeLocationSearch 