function sortLocations(locations, screenWidth){

  switch (screenWidth) {
    case "x-small":
      return locations
    case "small":
      return sortTwoCol()
    case "medium":
    case "large":
      return sortThreeCol()
    default:
      return locations
  }

  function sortTwoCol(){
    const n = locations.length
    const ceil = Math.ceil(n/2)
    let pointer = 0
    const result = []

    if (n % 2 === 0) {
      for (let i=0; i < ceil; i++){
        result.push(locations[pointer])
        result.push(locations[pointer + ceil])
        pointer++
      }
    }

    if (n % 2 === 1) {
      for (let i=1; i < ceil; i++){
        result.push(locations[pointer])
        result.push(locations[pointer + ceil])
        pointer++
      }
      result.push(locations[pointer])
    }

    return result
  }

  function sortThreeCol(){
    
    const n = locations.length
    const ceil = Math.ceil(n/3)
    let pointer = 0
    const result = []

    if (n % 3 === 0) {
      for(let i=0; i < ceil; i++) {
        result.push(locations[pointer])
        result.push(locations[pointer + ceil])
        result.push(locations[pointer + (2 * ceil)])
        pointer++
      }
    }

    if (n % 3 === 1) {
      for(let i=1; i < ceil; i++) {
        result.push(locations[pointer])
        result.push(locations[pointer + ceil])
        result.push(locations[pointer + (2 * ceil - 1)])
        pointer++
      }
      result.push(locations[pointer])
    }

    if (n % 3 === 2) {
      for(let i=1; i < ceil; i++) {
        result.push(locations[pointer])
        result.push(locations[pointer + ceil])
        result.push(locations[pointer + (2 * ceil)])
        pointer++
      }

      result.push(locations[pointer])
      result.push(locations[pointer + ceil])
    }

    return result
  }
  
}

export default sortLocations