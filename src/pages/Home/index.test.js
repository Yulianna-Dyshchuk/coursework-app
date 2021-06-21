import React from "react";
import { shallow } from "enzyme";
import { Home } from "./index";

describe("Home component", () => {
  it("should render correctly without props", () => {
    const component = shallow(<Home />);

    expect(component).toMatchSnapshot();
  });
});
