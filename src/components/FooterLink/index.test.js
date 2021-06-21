import React from "react";
import { shallow } from "enzyme";
import { FooterLink } from "./index";

describe("FooterLink component", () => {
  it("should render correctly without props", () => {
    const component = shallow(<FooterLink />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with props", () => {
    const component = shallow(<FooterLink type="test" label="test" to="test" target="test" />);

    expect(component).toMatchSnapshot();
  });
});
