import { fireEvent, render } from "@testing-library/react";
import { Back, Github, Insta, LinkedIn, Location, Question } from ".";

const props = { onClick: jest.fn() };

describe("Icons", () => {
  it("renders the Back icon with no difHover", () => {
    const { getByLabelText } = render(<Back {...props} />);
    fireEvent.click(getByLabelText("Back_classNameBack"));
    expect(props.onClick).toHaveBeenCalled();
  });
  it("renders the Back icon with difHover", () => {
    const { getByLabelText } = render(<Back {...props} difHover />);
    fireEvent.click(getByLabelText("Back_classNameBackAlt"));
    expect(props.onClick).toHaveBeenCalled();
  });
  it("renders the Github icon", () => {
    const { getByLabelText } = render(<Github />);
    getByLabelText("Github");
  });
  it("renders the Insta icon", () => {
    const { getByLabelText } = render(<Insta />);
    getByLabelText("Insta");
  });
  it("renders the LinkedIn icon", () => {
    const { getByLabelText } = render(<LinkedIn />);
    getByLabelText("LinkedIn");
  });
  it("renders the Location icon", () => {
    const { getByLabelText } = render(<Location />);
    getByLabelText("Location");
  });
  it("renders the Question icon", () => {
    const { getByLabelText } = render(<Question {...props} />);
    fireEvent.click(getByLabelText("Question icon"));
    expect(props.onClick).toHaveBeenCalled();
  });
});
