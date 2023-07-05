import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3.5625rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 414px) {
    height: 3.125rem;
  }
`;

export const Option = styled.div`
  width: 20%;
  height: 57px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 414px) {
    gap: 5px;
  }
`;

export const OptionNumber = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.GREEN};

  @media (max-width: 414px) {
    font-size: 9px;
  }
`;

export const OptionName = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};

  @media (max-width: 414px) {
    font-size: 9px;
  }
`;
