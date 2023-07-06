import styled from "styled-components";

type ModelButton = {
  model: string;
};

export const Container = styled.button<ModelButton>`
  width: 140px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 700;

  border-width: ${({ model }) => (model === "default" ? "0.5px" : 0)};
  border-color: ${({ theme }) => theme.COLORS.DARK_GREEN};

  background-color: ${({ theme, model }) =>
    model === "primary"
      ? theme.COLORS.DARK_BLUE
      : model === "secondary"
      ? theme.COLORS.GREEN
      : theme.COLORS.WHITE};

  color: ${({ theme, model }) =>
    model === "default" ? theme.COLORS.DARK_GREEN : theme.COLORS.WHITE};
`;
