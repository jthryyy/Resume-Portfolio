import { fireEvent, render } from "@testing-library/react";
import App from "./App";
import { List } from "./List";

jest.mock("./List");

const mockList = List as jest.MockedFunction<typeof List>;

describe("App", () => {
  beforeEach(() => {
    mockList.mockReturnValue(<div>mock list</div>);
  });
  it("renders the app component with correct information", () => {
    const { getByRole, getByLabelText, getByText } = render(<App />);
    getByText("Jet Rader - Developer");
    getByRole("img", { name: "Portrait" });
    getByRole("img", { name: "Labtop" });
    getByRole("img", { name: "Spam masubi" });
    getByRole("img", { name: "Book" });
    getByRole("img", { name: "Test tubes" });
    getByRole("img", { name: "Diploma" });
    getByRole("img", { name: "Resume" });
    getByRole("img", { name: "Bee" });
    fireEvent.click(getByLabelText("AboutMe"));
    getByText("mock list");
  });
  it("renders the question menu and clicking on any button renders the list", () => {
    const { getByLabelText, getByRole, getByText } = render(<App />);
    fireEvent.click(getByLabelText("Question icon"));
    // some menu options
    getByRole("link", { name: "Opentrons Software" });
    getByRole("link", { name: "Opentrons Science" });
    getByRole("link", { name: "Princeton Lab" });
    fireEvent.click(getByLabelText("opentronsSw"));
    getByText("mock list");
  });
});
