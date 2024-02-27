import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import LocationView from "./views/LocationView";
import SavedView from "./views/SavedView";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import "./App.css"

const App = () => {
    return (
      <>
        <Navbar />
        {/* // <div className="routes-div"> */}
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/saved" element={<SavedView />} />
            <Route path="/location" element={<LocationView />} />
          </Routes>
        {/* // </div> */}
        <Footer />
      </>
    );
};

export default App;
