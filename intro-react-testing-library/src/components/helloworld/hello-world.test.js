import React from "react";
import { screen, render } from "@testing-library/react";
import { HelloWorld } from "./hello-world";

describe("<HelloWorld/>", () => {
  test("should renders HelloWorld component", () => {
    const { debug } = render(<HelloWorld />);
    const title = screen.getByText(/hello world/i);
    expect(title).toBeInTheDocument();
    debug(title);
  });
});
