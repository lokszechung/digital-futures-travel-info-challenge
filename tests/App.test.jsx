import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";
import { describe } from "vitest";
import userEvent from "@testing-library/user-event";
import SavedView from "../src/views/SavedView/SavedView";
import LocationView from "../src/views/LocationView/LocationView";
import Navbar from "../src/components/Navbar/Navbar";

describe("App tests", () => {
  
  it("App component should have search box", () => {
    render(<MemoryRouter><App /></MemoryRouter>)

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  })

  it("When user types a location in HomeView, site navigates to LocationView", async () => {

    render(<MemoryRouter><App /></MemoryRouter>)

      await userEvent.type(
        screen.getByPlaceholderText("E.g. London, Paris, Hong Kong..."), "London"
      )

      await userEvent.click(screen.getByText("Search"))

      expect(screen.getByText("Loading...")).toBeInTheDocument()

  })

})


