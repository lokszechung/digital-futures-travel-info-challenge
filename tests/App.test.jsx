import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";

describe("App tests", () => {
  
  it("App component should have search box", () => {
    render(<MemoryRouter><App /></MemoryRouter>)

    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })

})




