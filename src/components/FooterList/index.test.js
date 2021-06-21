import React from "react";
import { shallow } from "enzyme";
import { FooterList } from "./index";

describe("FooterList component", () => {
  it("should render correctly without props", () => {
    const component = shallow(<FooterList />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with props", () => {
    const component = shallow(<FooterList title="test" list={[]} />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with props and children", () => {
    const component = shallow(
      <FooterList title="test" list={[]}>
        <span>test child 1</span>
        <span>test child 2</span>
      </FooterList>
    );

    expect(component).toMatchSnapshot();
  });
});
