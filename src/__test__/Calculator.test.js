import React from "react";
import { render } from "@testing-library/react";
import Calculator from "../components/Calculator";

it("renders to match the snapshot", () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});
