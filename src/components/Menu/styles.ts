import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

// type OptionProps = {
//   option: string;
//   optionSelected: string;
// };

export const Container = styled.div`
  width: 100%;
  height: 3.5625rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 414px) {
    height: 3.125rem;
  }
`;

export const Option = styled(NavLink)`
  width: 20%;
  height: 57px;
  border-radius: 0 20px 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  @media (max-width: 414px) {
    gap: 5px;
  }

  background: none;
  border: 0;

  &:hover {
    opacity: 1;
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

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 414px) {
    font-size: 9px;
  }
`;
