/* TEXT-FIELD COMPONENT UNIT TEST
   ========================================================================== */

import { render, screen } from "@testing-library/react";

import TextField from "./text-field";

test("Renders TextField", () => {
  render(<TextField />);
  const linkElement = screen.getByText(/Text field/i);
  expect(linkElement).toBeInTheDocument();
});
