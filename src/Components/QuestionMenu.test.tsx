import { fireEvent, render } from "@testing-library/react";
import { QuestionMenu } from "./QuestionMenu";

describe("QuestionMenu", () => {
  it("renders the question menu options", () => {
    const props = { onClick: jest.fn() };
    const { getByRole, getByLabelText, getByText } = render(
      <QuestionMenu {...props} />
    );
    getByRole("link", { name: "Opentrons Software" });
    getByRole("link", { name: "Opentrons Science" });
    getByRole("link", { name: "Princeton Lab" });
    getByRole("link", { name: "YMCA of Honolulu" });
    getByRole("link", { name: "Publications" });
    getByRole("link", { name: "Education" });
    getByRole("link", { name: "About me" });
    getByText("Resume");
    fireEvent.click(getByLabelText("opentronsSw"));
    expect(props.onClick).toHaveBeenCalled();
  });
});
