import "./TellMeAbout.css"

const TellMeAbout = () => {

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search for:', location);
  };

  return (
    <div className="tell-container">
      <h2 className="text-center tell">Tell me about...</h2>
      <form className="d-flex row justify-content-center align-items-center" onSubmit={handleSearch}>
        <input className="rounded py-2 mt-4" type="text" name="home-location" placeholder="E.g. London, Paris, Hong Kong..." />
        <button type="submit" className="btn btn-primary w-50 mt-3">Search</button>
      </form>
    </div>
  )
}

export default TellMeAbout 