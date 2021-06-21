import React from "react";
import { shallow } from "enzyme";
import { NavbarSelect } from "./index";

describe("NavbarSelect component", () => {
  it("should render correctly without props", () => {
    const component = shallow(<NavbarSelect />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with props", () => {
    const component = shallow(<NavbarSelect links={[]} baseUrl="/" />);

    expect(component).toMatchSnapshot();
  });
});
