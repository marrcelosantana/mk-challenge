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
  border-color: #205266;

  background-color: ${({ model }) =>
    model === "primary"
      ? "#4B8DB5"
      : model === "secondary"
      ? "#63d391"
      : "#FFF"};

  color: ${({ model }) => (model === "default" ? "#205266" : "#FFF")};
`;
