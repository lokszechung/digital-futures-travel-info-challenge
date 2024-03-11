import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

import WeatherLocation from "../../../src/components/WeatherComponents/WeatherLocation/WeatherLocation";
import getLocationWeatherUtil from "../../../src/utils/getLocationWeatherUtil";
import LocationView from "../../../src/views/LocationView/LocationView";
import testWeatherData from "../../testDummyWeatherData.json"


describe("WeatherLocation tests", () => {

  describe("Display weather data tests", () => {

    vi.mock("../../../src/utils/getLocationWeatherUtil") 
  
    it("When data for location is returned, WeatherLocation should show correct location", async () => {
  
      const search = "London"
      const savedLocations = ["Los Angeles"]
      const testWeatherResponse = testWeatherData.london
  
      getLocationWeatherUtil.mockResolvedValueOnce({ data: testWeatherResponse })
  
      render(<MemoryRouter><LocationView search={search} savedLocations={savedLocations} setSavedLocation={vi.fn()} /></MemoryRouter>)
  
      await waitFor(() => {
        expect(screen.getByText("London")).toBeInTheDocument()
      })
  
    })

  })

  describe("Saving a location tests", () => {

    const testLocalStorage = (() => {
      let storage = {}
      return {
        getItem: (key) => storage[key] || null,
        setItem: (key, value) => {
          storage[key] = value.toString()
        },
      }
    })()
  
    Object.defineProperty(window, "localStorage", { value: testLocalStorage })
    
    it("Saving a location saves to local storage", async () => {
      
      const location = "Shanghai"
      const savedLocations = []
  
      render(<WeatherLocation location={location} savedLocations={savedLocations} setSavedLocations={vi.fn()}/>)
  
      userEvent.click(screen.getByAltText("bookmark"))
  
      await waitFor(() => {
        expect(JSON.parse(localStorage.getItem("savedLocations"))).toContain(location);
      })
  
    })
  
    it("Saving a location displays in the UI", async () => {
      
      const location = "Edinburgh"
      const savedLocations = []
      const setSavedLocations = savedLocations.push(location)
  
      render(<WeatherLocation location={location} savedLocations={savedLocations} setSavedLocations={setSavedLocations}/>)
  
      userEvent.click(screen.getByAltText("bookmark"))
  
      expect(screen.getByText("Click to remove from favourites")).toBeInTheDocument()
  
    })

    it("Unsaving a location removes from local storage", async () => {
      
      const location = "Shanghai"
      const savedLocations = ["Shanghai"]
  
      render(<WeatherLocation location={location} savedLocations={savedLocations} setSavedLocations={vi.fn()}/>)
  
      userEvent.click(screen.getByAltText("bookmark"))
  
      await waitFor(() => {
        expect(JSON.parse(localStorage.getItem("savedLocations"))).not.toContain(location);
      })
  
    })

    it("Unsaving a location displays in the UI", async () => {
      
      const location = "Shanghai"
      const savedLocations = ["Shanghai"]
      const setSavedLocations = savedLocations.pop()
  
      render(<WeatherLocation location={location} savedLocations={savedLocations} setSavedLocations={setSavedLocations}/>)
  
      userEvent.click(screen.getByAltText("bookmark"))
  
      expect(screen.getByText("Click to add to favourites")).toBeInTheDocument()
  
    })

  })


})