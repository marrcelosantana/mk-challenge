import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const Column = styled.div`
  width: 25%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  min-height: 100vh;

  @media (max-width: 414px) {
    width: 10%;
  }
`;

export const FormContainer = styled.div`
  width: 65%;
  padding: 46px 42px 66px 30px;
  margin-top: 80px;

  @media (max-width: 414px) {
    width: 100%;
    padding: 30px 20px 50px 20px;
  }

  @media (max-width: 920px) {
    width: 100%;
    padding: 36px 32px 56px 32px;
  }

  @media (min-width: 1444px) {
    width: 100%;
    padding: 46px 42px 66px 30px;
  }
`;

export const Titles = styled.div`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  margin-bottom: 16px;
`;

export const Subtitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.GREEN};
`;

export const Menu = styled.div`
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

export const Option = styled.div`
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
