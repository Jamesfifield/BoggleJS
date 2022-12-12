import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";

import Boggle from "../boggle";

describe("Boggle wraps all game components and logic", () => {
  const { container } = render(
    <Router>
      <Boggle />
    </Router>
  );

  it("The default gamesize should be 4x4. There for there should be a total of 16 dice with the class .col", () => {
    expect(container.getElementsByClassName("col").length).toBe(16);
  });

  it("should add dice value to output screen when clicked", () => {
    const { container } = render(
      <Router>
        <Boggle />
      </Router>
    );
    let diceButton = container.getElementsByClassName("dice");
    fireEvent.click(diceButton[0]);

    let output = container.getElementsByClassName("userInput")[0].textContent;
    console.log(output);

    expect(
      container.getElementsByClassName("userInput")[0].textContent
    ).toEqual(output);
  });

  it("should render game size equal to state past by the router", () => {
    const { container } = render(
      <MemoryRouter initialEntries={[{ state: { gameSize: 8 } }]}>
        <Boggle />
      </MemoryRouter>
    );

    expect(container.getElementsByClassName("col").length).toBe(8 * 8);
  });
});
