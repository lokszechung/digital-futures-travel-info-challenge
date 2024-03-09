import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../src/App";
import { describe } from "vitest";

describe("App tests", () => {
  
  it("App component should render", () => {
    expect(render(<MemoryRouter><App /></MemoryRouter>)).toBeTruthy()
  })

  it("App component should have text Tell me about...", () => {
    render(<MemoryRouter><App /></MemoryRouter>)

    expect(screen.getByText("Tell me about...")).toBeInTheDocument();
  })

})


