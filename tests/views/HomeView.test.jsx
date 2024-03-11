import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../src/App";
import userEvent from "@testing-library/user-event";

describe("HomeView tests", () => {

  describe("Search submit tests", () => {
    
    it("When user types and searches a location in HomeView, site navigates to LocationView", async () => {

      render(<MemoryRouter><App /></MemoryRouter>)

        await userEvent.type(screen.getByPlaceholderText("E.g. London, Paris, Hong Kong..."), "London")

        await userEvent.click(screen.getByText("Search"))

        expect(screen.getByText("Loading...")).toBeInTheDocument()

    })

    it("When user types and searches nothing, site does not navigate away", async () => {

      render(<MemoryRouter><App /></MemoryRouter>)

        await userEvent.click(screen.getByText("Search"))

        expect(screen.queryByText("Loading...")).not.toBeInTheDocument()

    })

    it("When user types and searches whitespace, site does not navigate away", async () => {

      render(<MemoryRouter><App /></MemoryRouter>)

      await userEvent.type(screen.getByPlaceholderText("E.g. London, Paris, Hong Kong..."), "  ")

        await userEvent.click(screen.getByText("Search"))

        expect(screen.queryByText("Loading...")).not.toBeInTheDocument()

    })

  })

})