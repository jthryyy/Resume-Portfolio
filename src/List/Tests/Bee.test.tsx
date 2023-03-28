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
      "Troubleshooted and analyzed molecular protocols (i.e. mRNA extraction, Tag-seq, single cell-seq) adding over a thousand unique bee sequences to the lab`s genetic library"
    );
    getByText(
      "Advised undergraduate and graduate students in molecular protocols, including time at Mpala Research Centre in Nairobi, Kenya where I mentored students to sequence over 5 million bacterial reads from rhino fecal matter"
    );
    fireEvent.click(getByLabelText("Back_classNameBack"));
    expect(props.onClick).toHaveBeenCalled();
    getByLabelText("bee");
  });
});
