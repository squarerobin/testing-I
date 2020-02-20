import React from "react";
import { render } from "@testing-library/react";
import App, { addFieldGoal, addTouchdown } from "./App";

test("app renders without crashing!", () => {
  render(<App />);
});

test("lions and tigers text is interactable", () => {
  const { getByText } = render(<App />);

  getByText(/lions/i);
  getByText(/tigers/i);
});

test("get touchdown button has an id", () => {
  const { getByTestId } = render(<App />);

  getByTestId(/home-touchdown/i);
});

// set up a describe/it structure and test that addFieldGoal and addTouchDown are working appropriately
describe("helper functions work as expected", () => {
  it("addFieldGoal should add 3 to current score", () => {
    expect(addFieldGoal(7)).toBe(10);
  });

  it("addTouchdown should add 7 to current score", () => {
    expect(addTouchdown(7)).toBe(14);
  });
});
