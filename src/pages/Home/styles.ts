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
    display: none;
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

export const Flags = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
  margin-top: -20px;
`;

export const Flag = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
