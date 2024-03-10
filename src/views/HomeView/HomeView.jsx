import "./HomeView.css"
import HomeLocationSearch from "../../components/HomeComponents/HomeLocationSearch/HomeLocationSearch"

const HomeView = ({ setSearch }) => {
  return (
    <>
      <div className="container-fluid home vh-100 p-0 d-flex justify-content-center align-items-center">
        <HomeLocationSearch setSearch={setSearch} />
      </div>
    </>
    
  )
}

export default HomeView