import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../components/Navbar";
import { BrowserRouter } from "react-router-dom";

it("renders to match the snapshot", () => {
  const tree = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  expect(tree).toMatchSnapshot();
});
