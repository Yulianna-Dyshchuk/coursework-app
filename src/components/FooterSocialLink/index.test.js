import React from "react";
import { shallow } from "enzyme";
import { FooterSocialLink } from "./index";

describe("FooterSocialLink component", () => {
  it("should render correctly without props", () => {
    const component = shallow(<FooterSocialLink />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with props", () => {
    const component = shallow(<FooterSocialLink to="test" icon={null} />);

    expect(component).toMatchSnapshot();
  });
});
