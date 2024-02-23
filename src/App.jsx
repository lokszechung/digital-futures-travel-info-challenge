import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import LocationView from "./views/LocationView";
import SavedView from "./views/SavedView";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
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
