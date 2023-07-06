import { render, screen } from "@testing-library/react";

import { Menu } from "..";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../../../styles/themes/default-theme";

import { BrowserRouter } from "react-router-dom";

const TEST_ID = "navlink-testId";

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
});
