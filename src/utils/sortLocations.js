function sortLocations(locations){

  // const sortedLocations = []

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

export default sortLocations