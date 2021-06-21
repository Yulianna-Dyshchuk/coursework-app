import React from "react";
import { shallow } from "enzyme";
import { Contacts } from "./index";

describe("Contacts component", () => {
  it("should render correctly without props", () => {
    const component = shallow(<Contacts />);

    expect(component).toMatchSnapshot();
  });
});
