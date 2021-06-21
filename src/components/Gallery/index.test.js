import React from "react";
import { shallow } from "enzyme";
import { Gallery } from "./index";
import { MockReduxProvider } from "../MockReduxProvider";

describe("Gallery component", () => {
  it("should render correctly without props", () => {
    const component = shallow(
      <MockReduxProvider>
        <Gallery />
      </MockReduxProvider>
    );

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with props", () => {
    const component = shallow(
      <MockReduxProvider>
        <Gallery gallery={[]} category="all" />
      </MockReduxProvider>
    );

    expect(component).toMatchSnapshot();
  });
});
