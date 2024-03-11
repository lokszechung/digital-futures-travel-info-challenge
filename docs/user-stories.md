1. **As a user, I want to be able to access a web-based travel information application, so I can**
2. **As a user, I want to be able to see a location search box on the home page, so I know where to search for a location**

- TEST : App component should have search box

3. **As a user, I want to be able to search by any town or city name, so that**

- TEST: When user types and searches a location in HomeView, site navigates to LocationView
- TEST: When user types and searches nothing, site does not navigate away
- TEST: getLocationWeatherUtil returns weather data for location searched

4. **As a user, I want my query to return a 5 day forcast of the location from a weather API, so that**

- TEST: extractWeatherData returns data in correct format

5. **As a user, I want to see a new view displayed when forecast data is returned, so that**

- TEST: **When data for location is returned, LocationView should display components**
- TEST: **When data for location is returned, WeatherLocation should show correct location**
- TEST: **When data for location is returned, WeatherToday should show correct information**
- TEST: **When data for location is returned, WeatherDaily should show correct information**
- TEST: **Error when location doesn't exist**

6. As a user, I want to be able to save a location as a favourite, so that I can quickly see certain locations.

- TEST: **Saving a location saves to local storage**
- TEST: **Saving a location displays in the UI**
- TEST: **Unsaving a location remove from local storage**
- TEST: **Unsaving a location displays in the UI**

7. As a user, I want to application to be responsive across the main breakpoints for devices

8. As a user, I want the navbar to only display "My Saved Locations" if I have any saved locations, so that I do not get confused.

- TEST: **My Saved Locations should not be displayed in navbar when no locations are saved**
- TEST: **My Saved Locations should display in navbar when locations are saved**

9. ✓ As a user, I want the navbar to show search bar if I'm not on the home page, so that

- TEST: **Navbar search bar should not be displayed when in HomeView**
- TEST: **Navbar search bar should be displayed when not in HomeView**
