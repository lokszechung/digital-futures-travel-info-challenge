function getDayName(dateToFormat){

  const date = new Date(dateToFormat)

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const day = dayNames[date.getDay()]

  return day
}

export default getDayName