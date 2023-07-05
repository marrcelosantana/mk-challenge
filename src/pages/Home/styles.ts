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
    padding: 30px 30px 50px 20px;
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
