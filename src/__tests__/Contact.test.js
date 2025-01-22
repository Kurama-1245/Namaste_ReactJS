import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact us page text cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load Button inside Contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Send");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should Load two input boxes on the Contact Component ", () => {
    render(<Contact />);

    // Querying
    const input = screen.getAllByRole("textbox");

    // Assertion
    expect(input).toHaveLength(2);
  });
});
