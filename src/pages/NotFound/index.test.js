import React from "react";
import { shallow } from "enzyme";
import { NotFound } from "./index";

describe("NotFound component", () => {
  it("should render correctly without props", () => {
    const component = shallow(<NotFound />);

    expect(component).toMatchSnapshot();
  });
});
