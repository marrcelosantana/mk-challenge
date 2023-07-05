import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3.125rem;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 32px;
`;

export const Info = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  width: 40%;
  height: 100%;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 32px;
`;

export const Titles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Title = styled.p`
  margin-right: 16px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Amount = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.GREEN};
`;
