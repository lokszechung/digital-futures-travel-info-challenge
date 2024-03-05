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

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<HomeView search={search} setSearch={setSearch} />} />
          <Route path="/saved" element={<SavedView />} />
          <Route path="/location" element={<LocationView search={search} />} />
        </Routes>
      <Footer />
    </>
  );
};

export default App;
