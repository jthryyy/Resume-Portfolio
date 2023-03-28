import { render } from "@testing-library/react";
import { Cert } from "../Cert";

describe("Cert", () => {
  it("renders all the informations", () => {
    const { getByLabelText, getByText } = render(<Cert />);
    getByLabelText("star");
    getByText("Reed College 2015 - 2018");
    getByText("BA in Biology");
    getByText("Thesis: The E.cology of E.coli");
  });
});
