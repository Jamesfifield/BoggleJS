import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import WordList from "../WordList";

describe("Wordlist presents the correct UI given a list", () => {
  const list = ["joe", "Bob", "Hayley", "Rangi"];
  const header = "Welcome";

  it("as a list item for each item in the given list", () => {
    render(<WordList list={list} listHeader="test headers" />);
    let x = screen.getAllByRole("listItem");
    expect(x.length).toEqual(list.length);
  });

  it("Display the list item data to the ui", () => {
    render(<WordList list={list} listHeader="test headers" />);
    let x = screen.getByText(/joe/i);
    expect(x).toBeInTheDocument();
  });

  it("Display correct header", () => {
    render(<WordList list={list} listHeader={header} />);
    let x = screen.getByText(header);
    expect(x).toBeInTheDocument();
  });
});
