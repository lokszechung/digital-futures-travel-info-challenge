import axios from "axios"
import getLocationWeatherUtil from "../../src/utils/getLocationWeatherUtil";
import testWeatherData from "../testDummyWeatherData.json"
import { describe } from "vitest";

vi.mock("axios");


describe("getLocationWeatherUtil tests", () => {

  it('Gets weather data for london', async () => {

    const testWeatherResponse = testWeatherData
  
    const location = "london"
    vi.spyOn(axios, 'get').mockResolvedValue(testWeatherResponse)
    const weatherData = await getLocationWeatherUtil(location)
  
    expect(axios.get).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=05a475280e7f92f6ac1ca216e3dd37c5`);
    expect(weatherData).toEqual(testWeatherResponse);
  
  })

})