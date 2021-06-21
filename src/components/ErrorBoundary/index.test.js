import React from "react";
import { shallow } from "enzyme";
import { ErrorBoundary } from "./index";

describe("ErrorBoundary component", () => {
  it("should render correctly without props", () => {
    const component = shallow(<ErrorBoundary />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with children", () => {
    const component = shallow(
      <ErrorBoundary>
        <span>test child 1</span>
        <span>test child 2</span>
      </ErrorBoundary>
    );

    expect(component).toMatchSnapshot();
  });
});
