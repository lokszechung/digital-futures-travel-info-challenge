import { render, screen, waitFor } from "@testing-library/react";
import WeatherDaily from "../../../src/components/WeatherComponents/WeatherDaily/WeatherDaily";


describe("WeatherDaily tests", () => {

  describe("Display weather data tests", () => {

    it("When data for location is returned, WeatherDaily should show correct information", async () => {
 
      const testWeatherDailyData = {date: '2024-03-04 00:00:00', weather_desc: 'light rain', icon: '10n', temp: 7.61}
      
      render(<WeatherDaily weatherDailyData={testWeatherDailyData} />)

      expect(screen.getByText("Monday")).toBeInTheDocument()
      expect(screen.getByAltText("10n")).toBeInTheDocument()
      expect(screen.getByText("8°C")).toBeInTheDocument()
      expect(screen.getByText("light rain")).toBeInTheDocument()
  
    })

  })

})