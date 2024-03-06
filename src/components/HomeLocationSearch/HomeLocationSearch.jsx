import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import "./HomeLocationSearch.css"

const HomeLocationSearch = ({ search, setSearch }) => { 

  const navigate = useNavigate()

  const handleSearchInput = (e) => {
    setSearch(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log("Search attempted for ", search)
    localStorage.setItem("searchQuery", search)
    navigate("/location")
  }

  return (
    <div className="tell-container">
      <h2 className="text-center tell">Tell me about...</h2>
      <form className="d-flex row justify-content-center align-items-center" onSubmit={handleSearchSubmit}>
        <input className="rounded py-2 mt-4" type="text" name="searchInput" placeholder="E.g. London, Paris, Hong Kong..." onChange={handleSearchInput} />
        <button type="submit" className="btn btn-primary w-50 mt-3">Search</button>
      </form>
    </div>
  )
}

export default HomeLocationSearch 