import React from "react";
import { categories } from "./reducer";

describe("Categories reducer", () => {
  it("should initialize correctly with default args", () => {
    const reducer = categories([], { type: null });

    expect(reducer).toStrictEqual([]);
  });
});
