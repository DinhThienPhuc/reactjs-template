/* LAYOUT NAVBAR COMPONENT UNIT TEST
   ========================================================================== */

import { render, screen } from "@testing-library/react";

import Navbar from "./navbar";

test("Renders Navbar", () => {
  render(<Navbar />);
  const text = screen.getByText(/Homepage/i);
  expect(text).toBeInTheDocument();
});
