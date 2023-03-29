import { fireEvent, render } from "@testing-library/react";
import { Hawaii } from "../Hawaii";

const props = { onClick: jest.fn() };

describe("Hawaii", () => {
  it("renders all the informations, clicking on images to get through spam", () => {
    const { getByLabelText, getByText, getByRole } = render(
      <Hawaii {...props} />
    );
    getByText("Group Leader, YMCA of Honolulu");
    getByLabelText("Location");
    getByText("Honolulu, Hawai`i");
    getByText("May 2018 - August 2018");
    getByText(
      "Directed and motivated 4th and 5th grade students, organizing daily educational activities to achieve a productive summer"
    );
    fireEvent.click(getByLabelText("Back_classNameBack"));
    expect(props.onClick).toHaveBeenCalled();
    getByRole("img", { name: "background" });
    getByRole("img", { name: "Spam Masubi_0" });
    getByText("Hungry? Click on the spam masubi to eat it!");
    fireEvent.click(getByLabelText("spamContainer_0"));
    getByRole("img", { name: "Spam Masubi_1" });
    fireEvent.click(getByLabelText("spamContainer_1"));
    getByRole("img", { name: "Spam Masubi_2" });
    fireEvent.click(getByLabelText("spamContainer_2"));
    getByRole("img", { name: "Spam Masubi_3" });
    getByText("Still hungry? Eat again!");
    fireEvent.click(getByLabelText("spamContainer_3"));
    getByText("Hungry? Click on the spam masubi to eat it!");
  });
  it("clicking on spam and then still hungry button to get back to full spam", () => {
    const { getByLabelText, getByText, getByRole } = render(
      <Hawaii {...props} />
    );
    getByRole("img", { name: "Spam Masubi_0" });
    getByText("Hungry? Click on the spam masubi to eat it!");
    fireEvent.click(getByLabelText("spamContainer_0"));
    getByRole("img", { name: "Spam Masubi_1" });
    fireEvent.click(getByLabelText("spamContainer_1"));
    getByRole("img", { name: "Spam Masubi_2" });
    fireEvent.click(getByLabelText("spamContainer_2"));
    getByRole("img", { name: "Spam Masubi_3" });
    fireEvent.click(getByText("Still hungry? Eat again!"));
    getByText("Hungry? Click on the spam masubi to eat it!");
  });
});
