/* LAYOUT FOOTER COMPONENT UNIT TEST
   ========================================================================== */

import { render, screen } from "@testing-library/react";

import Footer from "./footer";

test("Renders Footer", () => {
  render(<Footer />);
  const text = screen.getByText(/C2 Reactjs Base/i);
  expect(text).toBeInTheDocument();
});
