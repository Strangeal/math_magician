import React from "react";
import { render } from "@testing-library/react";
import Home from "../pages/Home";

it("renders to match the snapshot", () => {
  const tree = render(<Home />);
  expect(tree).toMatchSnapshot();
});
