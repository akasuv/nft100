import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import Button from "./index";

test.todo("should render a button with text");
test.todo("should work properly with user interaction");

test("should render a button", () => {
  const { getByRole } = render(<Button>Click</Button>);
  const button = getByRole("button");

  expect(button.textContent).toBe("Click");
});

test("should fire handleClick when user clicks the button", async () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<Button onClick={handleClick}>Click</Button>);
  const button = getByRole("button");

  await userEvent.click(button);
  expect(handleClick).toHaveBeenCalled();
});
