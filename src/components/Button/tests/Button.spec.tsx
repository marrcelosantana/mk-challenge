import { render, screen } from "@testing-library/react";

import { Button } from "..";

import { defaultTheme } from "../../../styles/themes/default-theme";
import { ThemeProvider } from "styled-components";

const TEXT_MOCK = "Clique";
const TEST_ID = "TEST_ID";

describe("Test button", () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Button data-testid={TEST_ID}>{TEXT_MOCK}</Button>
      </ThemeProvider>
    );
  });

  it("should render", () => {
    expect(screen.getByText(TEXT_MOCK)).toBeDefined();
  });
});
