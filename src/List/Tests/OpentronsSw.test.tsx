import { fireEvent, render } from "@testing-library/react";
import { OpentronsSw } from "../OpentronsSw";

const props = { onClick: jest.fn() };

describe("OpentronsSw", () => {
  it("renders all the information for opentrons sw", () => {
    const { getByLabelText, getByText } = render(<OpentronsSw {...props} />);
    getByLabelText("Location");
    getByText("New York City, New York");
    fireEvent.click(getByLabelText("Back_classNameBack"));
    expect(props.onClick).toHaveBeenCalled();
    getByText("Hello World");
  });
});
