import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Menu } from "..";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../../styles/themes/default-theme";

import { BrowserRouter } from "react-router-dom";

const TEST_ID = "navlink-testId";

const navlinks: string[] = [
  "Produto",
  "Cliente",
  "Anexar arquivo",
  "Pagamentos",
  "Contrato",
];
describe("Test button", () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Menu data-testid={TEST_ID} />
        </BrowserRouter>
      </ThemeProvider>
    );
  });

  it("should test", () => {
    expect(screen.getByTestId(TEST_ID)).toBeVisible();
  });

  it("should all link are visible", () => {
    navlinks.forEach((item: string) => {
      expect(screen.getByText(item)).toBeVisible();
    });
  });
});
