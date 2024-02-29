function formatDate(dateToFormat){
  
  const date = new Date(dateToFormat)

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const day = dayNames[date.getDay()]
  const dateNum = date.getDate()
  const month = monthNames[date.getMonth()]
  const year = date.getFullYear()
  const suffix = getSuffix(dateNum)

  const formattedDate = `${day}, ${dateNum}${suffix} ${month}, ${year}`
  
  return formattedDate
}

function getSuffix(dateNum){
    if (dateNum > 3 && dateNum < 21) return "th";
    switch (dateNum % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
}

export default formatDate