import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(32, 82, 102, 0.77);
`;

export const Content = styled(Dialog.Content)`
  width: 28.1875rem;
  height: 11.9375rem;
  border-radius: 20px;
  padding: 27px 31px 16px 27px;
  background: ${({ theme }) => theme.COLORS.WHITE};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 414px) {
    width: 350px;
    height: 14rem;
    padding: 17px 21px 6px 17px;
    transform: none;
    border-radius: 20px;
    margin-left: 20px;
    left: 0;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  margin-bottom: 5px;

  @media (max-width: 414px) {
    font-size: 13px;
  }
`;

export const Subtitle = styled.p`
  font-size: 12px;
  line-height: 160%;
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  margin-bottom: 25px;

  @media (max-width: 414px) {
    font-size: 12px;
  }
`;

export const Divider = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin: 24px 0 24px 0;
`;

export const Line = styled.div`
  width: 24px;
  height: 3px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  margin-bottom: 25px;
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackLink = styled.a`
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  font-size: 13px;
  line-height: 160%;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  width: 5.8125rem;
  height: 2rem;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 12px;
  font-weight: 700;
  border: 0;
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  right: 0;
  top: 0;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
  margin-right: -10px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
