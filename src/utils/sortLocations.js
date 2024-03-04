function sortLocations(locations, screenWidth){

  switch (screenWidth) {
    case "x-small":
      // console.log(`sorting for ${screenWidth}`)
      return locations
    case "small":
      // console.log(`sorting for ${screenWidth}`)
      return sortTwoCol()
    case "medium":
    case "large":
      // console.log(`sorting for ${screenWidth}`)
      return sortThreeCol()
    default:
      return locations
  }

  function sortTwoCol(){
    if (locations.length <= 2) {
      return locations
    }

    if (locations.length === 3) {
      return [locations[0], locations[2], locations[1]]
    }
  
    if (locations.length === 4) {
      return [locations[0], locations[2], locations[1], locations[3]]
    }

    if (locations.length === 5) {
      return [locations[0], locations[3], locations[1], locations[4], locations[2]]
    }
  
    if (locations.length === 6) {
      return [locations[0], locations[3], locations[1], locations[4], locations[2], locations[5]]
    }
  
    if (locations.length === 7) {
      return [locations[0], locations[4], locations[1], locations[5], locations[2], locations[6], locations[3]]
    }
  
    if (locations.length === 8) {
      return [locations[0], locations[4], locations[1], locations[5], locations[2], locations[6], locations[3], locations[7]]
    }
  }

  function sortThreeCol(){
    if (locations.length <= 3) {
      return locations
    }
  
    if (locations.length === 4) {
      return [locations[0], locations[2], locations[3], locations[1]]
    }
  
    if (locations.length === 5) {
      return [locations[0], locations[2], locations[4], locations[1], locations[3]]
    }
  
    if (locations.length === 6) {
      return [locations[0], locations[2], locations[4], locations[1], locations[3], locations[5]]
    }
  
    if (locations.length === 7) {
      return [locations[0], locations[3], locations[5], locations[1], locations[4], locations[6], locations[2]]
    }
  
    if (locations.length === 8) {
      return [locations[0], locations[3], locations[6], locations[1], locations[4], locations[7], locations[2], locations[5]]
    }
  }
  
}

export default sortLocations