import updateState from "../../src/utils/extractWeatherData"
import testWeatherData from "../testDummyWeatherData.json"

vi.mock("axios");

it('extractWeatherData returns data in correct format', async () => {

  const testData = testWeatherData.london
  const testFormattedWeatherData = 
  [
    {
      date: "2024-02-28 18:00:00",
      weather_desc: "light rain",
      icon: "10n",
      temp: 10.37
    },
    {
      date: "2024-02-29 15:00:00",
      weather_desc: "light rain",
      icon: "10d",
      temp: 5.98
    },
    {
      date: "2024-03-01 15:00:00",
      weather_desc: "scattered clouds",
      icon: "03d",
      temp: 8.41
    },
    {
      date: "2024-03-02 15:00:00",
      weather_desc: "light rain",
      icon: "10d",
      temp: 8.99
    },
    {
      date: "2024-03-03 15:00:00",
      weather_desc: "light rain",
      icon: "10d",
      temp: 5.31
    }
  ]

  const formattedWeatherData = updateState(testData)

  expect(formattedWeatherData).toEqual(testFormattedWeatherData)

})