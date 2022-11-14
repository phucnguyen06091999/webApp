import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// import { render, screen } from "@testing-library/react";
// import Gioithieu from "./Gioithieu";

// test("renders learn react link", () => {
//   render(<Gioithieu />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
