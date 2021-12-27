import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";

import { Counter } from "./counter";

describe("<Counter />", () => {
  test("display zero initial counts", () => {
    render(<Counter />);
    const result = screen.getByText(/Clicked: 0 times/i);
    expect(result).toBeInTheDocument();
  });
  test("display new counts after one click", () => {
    render(<Counter />);
    const button = screen.getByText(/click/i, { selector: "button" });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    const result = screen.getByText(/Clicked: 1 times/i);
    expect(result).toBeInTheDocument();
  });
});
