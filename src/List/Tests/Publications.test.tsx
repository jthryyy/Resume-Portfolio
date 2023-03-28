import { fireEvent, render } from "@testing-library/react";
import { Publication } from "../Publication";

const props = { onClick: jest.fn() };

describe("Publications", () => {
  it("renders all the information for publications", () => {
    const { getByLabelText } = render(<Publication {...props} />);
    fireEvent.click(getByLabelText("Back_classNameBack"));
    expect(props.onClick).toHaveBeenCalled();
    getByLabelText("book");
  });
});
