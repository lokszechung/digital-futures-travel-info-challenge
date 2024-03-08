import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import getLocationWeatherUtil from "./utils/getLocationWeatherUtil";
import HomeView from "./views/HomeView";
import LocationView from "./views/LocationView";
import SavedView from "./views/SavedView";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./App.css"

const App = () => {

  const [ search, setSearch ] = useState("")
  const [ error, setError ] = useState(null)
  const [ savedLocations, setSavedLocations ] = useState(JSON.parse(localStorage.getItem("savedLocations")) || [])

  function resetError() {
    setError(null)
  }

  return (
    <>
      <Navbar search={search} setSearch={setSearch} savedLocations={savedLocations} setError={setError}/>
        <Routes>
          <Route path="/" element={<HomeView search={search} setSearch={setSearch} setError={setError} />} />
          <Route path="/saved" element={<SavedView savedLocations={savedLocations} setSavedLocations={setSavedLocations} />} />
          <Route path="/location" element={<LocationView search={search} savedLocations={savedLocations} setSavedLocations={setSavedLocations} error={error} setError={setError} />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
