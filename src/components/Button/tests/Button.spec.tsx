import { render, screen } from "@testing-library/react";
import { Button } from "..";

const TEXT_MOCK = "Clique";
const TEST_ID = "TEST_ID";

describe("Test button", () => {
  beforeEach(() => {
    render(<Button data-testid={TEST_ID}>{TEXT_MOCK}</Button>);
  });

  it("should render", () => {
    expect(screen.getByText(TEXT_MOCK)).toBeDefined();
  });
});
