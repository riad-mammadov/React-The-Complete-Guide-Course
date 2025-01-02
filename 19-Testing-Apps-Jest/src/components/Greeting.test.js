import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
describe("Greeting Component", () => {
  test("renders hello world text", () => {
    render(<Greeting />);

    const helloWorldElement = screen.getByText("Hello world");
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("Renders initial text", () => {
    render(<Greeting />);

    const initialText = screen.getByText("Its good to see you", {
      exact: false,
    });

    expect(initialText).toBeInTheDocument();
  });

  test("Render changed text", () => {
    render(<Greeting />);

    userEvent.click(screen.getByText("Change text"));

    const initialText = screen.getByText("Changed");
    expect(initialText).toBeInTheDocument();
  });

  test("Check if text disappears after button press", () => {
    render(<Greeting />);

    userEvent.click(screen.getByText("Change text"));

    const text = screen.queryByText("Its good to see you");

    expect(text).toBeNull();
  });
});
