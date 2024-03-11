import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import getLocationWeatherUtil from "./utils/getLocationWeatherUtil";
import HomeView from "./views/HomeView/HomeView";
import LocationView from "./views/LocationView/LocationView";
import SavedView from "./views/SavedView/SavedView";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./App.css"

const App = () => {

  const [ search, setSearch ] = useState("")
  const [ savedLocations, setSavedLocations ] = useState(JSON.parse(localStorage.getItem("savedLocations")) || [])

  return (
    <>
      <Navbar search={search} setSearch={setSearch} savedLocations={savedLocations} />
        <Routes>
          <Route path="/" element={<HomeView setSearch={setSearch} />} />
          <Route path="/saved" element={<SavedView setSearch={setSearch} savedLocations={savedLocations} setSavedLocations={setSavedLocations} />} />
          <Route path="/location" element={<LocationView search={search} savedLocations={savedLocations} setSavedLocations={setSavedLocations} />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
