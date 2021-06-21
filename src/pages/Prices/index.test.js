import React from "react";
import { shallow } from "enzyme";
import { D1, D2, D3, Prices } from "./index";

describe("Prices component", () => {
  it("should render correctly without props", () => {
    const component = shallow(<Prices />);

    expect(component).toMatchSnapshot();
  });
});

describe("Prices children components", () => {
  it("D1 component should render correctly without props", () => {
    const component = shallow(<D1 />);

    expect(component).toMatchSnapshot();
  });

  it("D2 component should render correctly without props", () => {
    const component = shallow(<D2 />);

    expect(component).toMatchSnapshot();
  });

  it("D3 component should render correctly without props", () => {
    const component = shallow(<D3 />);

    expect(component).toMatchSnapshot();
  });
});
