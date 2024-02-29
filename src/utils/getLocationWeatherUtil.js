import axios from "axios";

// const getLocationWeatherUtil = async () => {

async function getLocationWeatherUtil() {

  try {
    const response = await axios.get("http://localhost:4000/london")
    // console.log(response)
    return response
  }
  catch (e) {
    console.log(e)
    return e
  }

}

export default getLocationWeatherUtil