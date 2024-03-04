import { useState, useEffect } from "react";

function useScreenSize() {
  const [ screenSize, setScreenSize ] = useState(getScreenSize(window.innerWidth))

  useEffect(() => {
    const handleWindowResize = () => {
      const width = window.innerWidth
      const newSize = getScreenSize(width)
      if (newSize !== screenSize){
        setScreenSize(newSize)
      }
    }
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [screenSize])

  function getScreenSize(width) {
    if (width < 576) {
      return "x-small"
    }
    if (width >= 576 && width < 768) {
      return "small"
    }
    if (width >= 768 && width < 992) {
      return "medium"
    }   
    if (width >= 992) {
      return "large"
    }                                                                                                                           
  }

  return screenSize
}

export default useScreenSize