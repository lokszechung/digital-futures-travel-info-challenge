Their latest idea is a web-based travel information application. The initial requirement is to display a 5 day weather forecast for any searchable location with the functionality to be able to save favourite locations locally.

- The user should see a location search box when they access the application home page that allows them to search any town or city by name (as per the wireframe supplied)
  - TEST : App component should have search box
- The application should send a query to a weather API to get a when location typed
  - TEST: When user types a location in HomeView, navigates to Locationview
  - TEST: Gets weather data for london
- 5-day forecast if the location can be found
  - TODO TEST: returns correct format
- a new view should be displayed, then the forecast data is returned
  - TEST: LocationView returns forecast data
- The user should be able to save a location as a favourite (although this should only persist on the device they are using at the time)
- The application should be responsive across the main breakpoints for devices (mobile, tablet, desktop) - wireframes are provided for each of these

1. As a user, I want to be able to access a web-based travel information application, so I can
2. As a user, I want to be able to see a location search box on the home page, so I know where to search for a location

- TEST : App component should have search box

3. As a user, I want to be able to search by any town or city name, so that

- TEST: When user types and searches a location in HomeView, site navigates to LocationView
- TODO TEST: When user types and searches nothing, site does not navigate away
- TEST: getLocationWeatherUtil returns weather data for location searched

4. As a user, I want my query to return a 5 day forcast of the location from a weather API, so that

- TEST: extractWeatherData returns data in correct format

5. As a user, I want to see a new view displayed when forecast data is returned, so that

- TODO TEST: test when data is london, 4 weahter daily returned w(with info) etc
- TODO TEST: test forecast data returned and the locations shown should be different for each search?
- TODO TEST: Error when location doesn't exist

6. As a user, I want to be able to save a location as a favourite, so that I can quickly see certain locations.

- TEST: Saving a location saves to local storage
- TEST: Saving a location displays in the UI

7. As a user, I want to application to be responsive across the main breakpoints for devices

8. As a user, I want the navbar to only display "My Saved Locations" if I have any saved locations, so that I do not get confused.

- TEST: My Saved Locations should not be displayed in navbar when no locations are saved
- TEST: My Saved Locations should display in navbar when locations are saved

9. ✓ As a user, I want the navbar to show search bar if I'm not on the home page, so that

- TEST: Navbar search bar should not be displayed when in HomeView
- TEST: Navbar search bar should be displayed when not in HomeView
