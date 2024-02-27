import { useNavigate } from 'react-router-dom'

import "./HomeLocationSearch.css"

const TellMeAbout = () => {

  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("Search attempted")
    navigate("/location")
  }

  return (
    <div className="tell-container">
      <h2 className="text-center tell">Tell me about...</h2>
      <form className="d-flex row justify-content-center align-items-center" onSubmit={handleSearch}>
        <input className="rounded py-2 mt-4" type="text" placeholder="E.g. London, Paris, Hong Kong..." />
        <button type="submit" className="btn btn-primary w-50 mt-3">Search</button>
      </form>
    </div>
  )
}

export default TellMeAbout 