import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 40px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Image = styled.img`
  width: 128.11px;
  height: 34.831px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border: 0;
`;
