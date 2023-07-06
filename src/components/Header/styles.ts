import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 40px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  position: absolute;
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

export const Flags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Flag = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
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

  @media (max-width: 414px) {
    width: 20px;
    height: 20px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;
