import axios from "axios";

// const getLocationWeatherUtil = async () => {

async function getLocationWeatherUtil(search) {

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=05a475280e7f92f6ac1ca216e3dd37c5`)
    // console.log(response)
    return response
  }
  catch (e) {
    console.log(e)
    return e
  }

}

export default getLocationWeatherUtil