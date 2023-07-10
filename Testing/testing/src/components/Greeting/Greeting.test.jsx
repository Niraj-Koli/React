import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

// Test //

// test("renders Hello, World !!!", () => {
//     render(<Greeting />);
//     const greetingElement = screen.getByText("Hello, World !!!", { exact: false });
//     expect(greetingElement).toBeInTheDocument();
// });

// Test Suites // => Can Contain Multiple Tests //

describe("Greeting component", () => {
    test("renders 'Hello, World !!!'", () => {
        // Arrange // => Setup
        render(<Greeting />);

        // Act // => Execute

        // Assert // => Verify
        const greetingElement = screen.getByText("Hello, World !!!");
        expect(greetingElement).toBeInTheDocument();
    });

    test("renders 'Yo, Good To See You' if button was NOT clicked", () => {
        render(<Greeting />);
        const greetingElement = screen.getByText("Yo, Good To See You", {
            exact: false,
        });
        expect(greetingElement).toBeInTheDocument();
    });

    test("renders 'Changed!' if the button was Clicked", () => {
        // Arrange // => Setup
        render(<Greeting />);

        // Act // => Execute
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);

        // Assert // => Verify
        const outputElement = screen.getByText("Changed!");
        expect(outputElement).toBeInTheDocument();
    });

    test("does NOT render 'Yo, Good To See You' if the button was Clicked", () => {
        // Arrange // => Setup
        render(<Greeting />);

        // Act // => Execute
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);

        // Assert // => Verify
        const outputElement = screen.queryByText("Yo, Good To See You", {
            exact: false,
        });
        expect(outputElement).toBeNull();
    });
});
