import React from "react";
import { shallow } from "enzyme";
import { GalleryItem } from "./index";
import { MockReduxProvider } from "../MockReduxProvider";

describe("GalleryItem component", () => {
  it("should render correctly without props", () => {
    const component = shallow(
      <MockReduxProvider>
        <GalleryItem />
      </MockReduxProvider>
    );

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with props", () => {
    const component = shallow(
      <MockReduxProvider>
        <GalleryItem
          title="TEST"
          category="all"
          shortDescription="Test"
          imageUrl="https://www.lotus-qa.com/wp-content/uploads/2020/02/testing.jpg"
        />
      </MockReduxProvider>
    );

    expect(component).toMatchSnapshot();
  });
});
