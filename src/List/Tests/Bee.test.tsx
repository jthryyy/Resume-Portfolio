import { fireEvent, render } from "@testing-library/react";
import { Bee } from "../Bee";

describe("Bee", () => {
  it("renders all the informations", () => {
    const props = { onClick: jest.fn() };
    const { getByLabelText, getByText } = render(<Bee {...props} />);
    getByText("Lab Technician, Princeton University");
    getByLabelText("Location");
    getByText("Princeton, New Jersey");
    getByText("October 2018 - October 2019");
    getByText(
      "Analyzed and troubleshot various molecular protocols, such as mRNA extraction, Tag-seq, and single cell-seq, resulting in the successful addition of over a thousand unique bee sequences to the lab`s genetic library"
    );
    getByText(
      "Mentored undergraduate and graduate students in molecular protocols, including leading a group at Mpala Research Centre in Nairobi, Kenya, where we sequenced over 5 million bacterial reads from rhino fecal matter and analyzed the resulting data"
    );
    fireEvent.click(getByLabelText("Back_classNameBack"));
    expect(props.onClick).toHaveBeenCalled();
    getByLabelText("bee");
  });
});
