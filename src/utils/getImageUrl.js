function getImageUrl(iconName) {
  return new URL(`/public/assets/weather-icons/${iconName}.svg`, import.meta.url).href
}

export default getImageUrl