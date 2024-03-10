import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe } from "vitest";
import userEvent from "@testing-library/user-event";
import WeatherLocation from "../../../src/components/WeatherComponents/WeatherLocation/WeatherLocation";

describe("WeatherLocation tests", () => {

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

    render(
      <WeatherLocation location={location} savedLocations={savedLocations} setSavedLocations={vi.fn()}/>
    )

    userEvent.click(screen.getByAltText("bookmark"))

    await waitFor(() => {
      expect(JSON.parse(localStorage.getItem("savedLocations"))).toContain(location);
    })

  })

  it("Saving a location displays in the UI", async () => {
    
    const location = "Edinburgh"
    const savedLocations = []
    const setSavedLocations = savedLocations.push(location)

    render(
      <WeatherLocation location={location} savedLocations={savedLocations} setSavedLocations={setSavedLocations}/>
    )

    userEvent.click(screen.getByAltText("bookmark"))

    expect(screen.getByText("Click to remove from favourites")).toBeInTheDocument()

  })

})