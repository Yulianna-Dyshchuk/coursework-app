import React from "react";
import { shallow } from "enzyme";
import { Footer } from "./index";

describe("Footer component", () => {
  it("should render correctly without props", () => {
    const component = shallow(<Footer />);

    expect(component).toMatchSnapshot();
  });
});
