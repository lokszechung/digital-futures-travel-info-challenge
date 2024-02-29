function getImageUrl(iconName) {
  return new URL(`../assets/weather-icons/${iconName}.svg`, import.meta.url).href
}

export default getImageUrl