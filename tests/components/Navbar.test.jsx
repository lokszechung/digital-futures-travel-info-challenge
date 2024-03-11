import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../../src/components/Navbar/Navbar";
import { describe } from "vitest";

describe("Navbar tests", () => {

  describe("Navbar search tests", () => {

    it("Navbar search bar should not be displayed when in HomeView", () => {
      const testSavedLocations = ["London"]
  
      render(
        <MemoryRouter initialEntries={["/"]}>
          <Navbar savedLocations={testSavedLocations} />
        </MemoryRouter>
      );
  
      expect(screen.queryByPlaceholderText("Search")).not.toBeInTheDocument()
  
    })
  
    it("Navbar search bar should be displayed when not in HomeView", () => {
      const testSavedLocations = ["London"]
  
      render(
        <MemoryRouter initialEntries={["/saved"]}>
          <Navbar savedLocations={testSavedLocations} />
        </MemoryRouter>
      );
  
      expect(screen.getByPlaceholderText("Search")).toBeInTheDocument()
  
    })

  })

  describe("Navbar My Saved Locations tests", () => {

    it("My Saved Locations should not be displayed in navbar when no locations are saved", () => {
      const testSavedLocations = []
  
      render(
        <MemoryRouter>
          <Navbar savedLocations={testSavedLocations} />
        </MemoryRouter>
      );
  
      expect(screen.queryByText("My Saved Locations")).not.toBeInTheDocument()
  
    })
  
    it("My Saved Locations should display in navbar when locations are saved", () => {
      const testSavedLocations = ["London", "Oslo"]
  
      render(
        <MemoryRouter>
          <Navbar savedLocations={testSavedLocations} />
        </MemoryRouter>
      );
  
      expect(screen.getByText("My Saved Locations")).toBeInTheDocument()
      expect(screen.getByText("London")).toBeInTheDocument()
      expect(screen.getByText("Oslo")).toBeInTheDocument()
  
    })

  })

})