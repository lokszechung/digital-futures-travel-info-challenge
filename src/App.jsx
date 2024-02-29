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

    // const [ weatherData, setWeatherData ] = useState(null)

    // const getWeatherData = async () => {
    //   try{
    //     const response = await getLocationWeatherUtil()
    //     // console.log(response)
    //     setWeatherData(response.data)
    //   } 
    //   catch (e) {
    //     console.log(e)
    //   }
    // }

    // useEffect(() => {
    //   getWeatherData()
    // }, [])

    return (
      <>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/saved" element={<SavedView />} />
            <Route path="/location" element={<LocationView />} />
          </Routes>
        <Footer />
      </>
    );
};

export default App;
