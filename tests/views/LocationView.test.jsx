import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import getLocationWeatherUtil from "../../src/utils/getLocationWeatherUtil";
import LocationView from "../../src/views/LocationView/LocationView";
import testWeatherData from "../testDummyWeatherData.json"

vi.mock("../../src/utils/getLocationWeatherUtil")

describe("LocationView tests", () => {
  
  it("When data for location is returned, LocationView should display components", async () => {

    const search = "London"
    const savedLocations = ["Los Angeles"]
    const testWeatherResponse = testWeatherData.london

    getLocationWeatherUtil.mockResolvedValueOnce({ data: testWeatherResponse })

    render(<MemoryRouter><LocationView search={search} savedLocations={savedLocations} setSavedLocation={vi.fn()} /></MemoryRouter>)

    await waitFor(() => {
      expect(screen.getByTestId("weather-location")).toBeInTheDocument()
      expect(screen.getByTestId("weather-today")).toBeInTheDocument()
      expect(screen.getAllByTestId("weather-daily").length).toBe(4)
    })

  })

  it("Error when location doesn't exist", async () => {

    const search = "not_a_place"
    const savedLocations = ["Los Angeles"]
    const testError = new Error()
    testError.response = {
      data: {
        cod: "404",
        message: "city not found"
      }
    }

    getLocationWeatherUtil.mockRejectedValue(testError)

    render(<MemoryRouter><LocationView search={search} savedLocations={savedLocations} setSavedLocation={vi.fn()} /></MemoryRouter>)

    await waitFor(() => {
      expect(screen.getByText(`${search} is not a place, try searching again.`)).toBeInTheDocument()
    })

  })

})