import React from "react";
import { shallow } from "enzyme";
import { Navbar } from "./index";
import { MockReduxProvider } from "../MockReduxProvider";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: "localhost:3000/" })
}));

describe("Navbar component", () => {
  it("should render correctly without props", () => {
    const component = shallow(
      <MockReduxProvider>
        <Navbar />
      </MockReduxProvider>
    );

    expect(component).toMatchSnapshot();
  });
});
