import { render, screen, waitFor } from "@testing-library/react";
import WeatherToday from "../../../src/components/WeatherComponents/WeatherToday/WeatherToday";


describe("WeatherLocation tests", () => {

  describe("Display weather data tests", () => {

    it("When data for location is returned, WeatherToday should show correct information", async () => {
 
      const testWeatherTodayData = {date: '2024-03-04 00:00:00', weather_desc: 'light rain', icon: '10n', temp: 7.61}
      
      render(<WeatherToday weatherTodayData={testWeatherTodayData} />)

      expect(screen.getByText("Monday, 4th March, 2024")).toBeInTheDocument()
      expect(screen.getByAltText("10n")).toBeInTheDocument()
      expect(screen.getByText("8°C")).toBeInTheDocument()
      expect(screen.getByText("light rain")).toBeInTheDocument()
  
    })

  })

})