import React from "react";
import { render, screen } from "@testing-library/react";
import Home  from '../../pages/index';

describe("Home page", () => {
  it("render  text", () => {
    render(<Home />);
    screen.getByRole("heading", { name: /Welcome/i });
  });
});
