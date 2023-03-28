import { fireEvent, render } from "@testing-library/react";
import { About } from "../About";

describe("About", () => {
  it("renders all the information and links", () => {
    const props = { onClick: jest.fn() };
    const { getByRole, getByLabelText, getByText } = render(
      <About {...props} />
    );
    getByText(
      "I am a developer who enjoys making clean, user-friendly, beautiful UI."
    );
    getByText("Reach out if you want to talk about code or my dog, Hopia.");
    getByText("hi, I`m jet!");
    getByRole("img", { name: "portrait" });
    getByLabelText("LinkedIn");
    getByLabelText("Github");
    getByLabelText("Insta");
    fireEvent.click(getByLabelText("Back_classNameBack"));
    expect(props.onClick).toHaveBeenCalled();
    expect(getByLabelText("InstaLink")).toHaveAttribute(
      "href",
      "https://www.instagram.com/hopiathefloof/"
    );
    expect(getByLabelText("LinkedInLink")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/jethary-rader-5ab428153/"
    );
    expect(getByLabelText("GithubLink")).toHaveAttribute(
      "href",
      "https://github.com/jthryyy"
    );
  });
});
