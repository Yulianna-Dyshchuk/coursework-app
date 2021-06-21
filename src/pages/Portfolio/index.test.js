import React from "react";
import { shallow } from "enzyme";
import { Portfolio } from "./index";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({ pathname: "localhost:3000/" })
}));

describe("Portfolio component", () => {
  it("should render correctly without props", () => {
    const component = shallow(<Portfolio />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with props", () => {
    const component = shallow(<Portfolio path="/test" />);

    expect(component).toMatchSnapshot();
  });
});
