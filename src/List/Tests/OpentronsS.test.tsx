import { fireEvent, render, screen } from "@testing-library/react";
import { OpentronsS } from "../OpentronsS";

const props = { onClick: jest.fn() };

describe("OpentronsS", () => {
  it("renders all the information for opentrons s", () => {
    const { getByLabelText, getByText } = render(<OpentronsS {...props} />);
    getByText("Senior Researcher and Research Tech, Opentrons Labworks");
    getByLabelText("Location");
    getByText("New York City, New York");
    getByText("October 2019 - July 2021");
    getByText(
      "Collected extensive extraction data and validated numerous kits across 8 manufacturers, leading to several publications, a live webinar and outperforming competitor standards"
    );
    getByText(
      "Supported 36 different labs with over 360 robots as a science consultant during the first year of the COVID-19 pandemic, generating record breaking quarterly revenue, three quarters in a row"
    );
    fireEvent.click(getByLabelText("Back_classNameBackAlt"));
    expect(props.onClick).toHaveBeenCalled();
    getByText("Click to fill up the beakers!");
  });
  it("renders the beakers and clicking on them fills them up", () => {
    const { getByLabelText, getByText } = render(<OpentronsS {...props} />);
    getByText("Click to fill up the beakers!");
    fireEvent.click(getByLabelText("beaker"));
    fireEvent.click(getByLabelText("beaker2"));
    fireEvent.click(getByLabelText("beaker3"));
    expect(
      screen.queryByText("Click to fill up the beakers!")
    ).not.toBeInTheDocument();
  });
});
