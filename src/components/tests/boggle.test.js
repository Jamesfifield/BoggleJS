import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Button from "../Button";

it("renders with or without a name", () => {
  render(<Button value="hello there" />);
  expect(screen.getByRole("button")).toHaveTextContent("hello there");
});

it("renders with or without a name", () => {
  const clickEvent = jest.fn();
  render(<Button value="hello there" onClick={clickEvent} />);
  fireEvent.click(screen.getByRole("button"));

  expect(clickEvent).toHaveBeenCalledTimes(1);
});
