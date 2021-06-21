import React from "react";
import { shallow } from "enzyme";
import { PriceItem } from "./index";

describe("PriceItem component", () => {
  it("should render correctly without props", () => {
    const component = shallow(<PriceItem />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with props", () => {
    const component = shallow(
      <PriceItem
        title="TEST TITLE"
        description="TEST DESCRIPTION"
        price={1000}
        imageUrl="https://blog.pokupon.ua/wp-content/uploads/2019/08/image3-9.jpg"
      />
    );

    expect(component).toMatchSnapshot();
  });
});
