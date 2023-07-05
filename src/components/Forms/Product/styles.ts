import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  border-radius: 20px;
  padding: 20px 29px;
`;

export const Section = styled.div``;

export const Title = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  font-weight: 700;
  line-height: normal;
`;

export const Line = styled.div`
  width: 24px;
  height: 3px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  font-weight: 700;
  line-height: normal;
  margin-bottom: 10px;
`;

export const Actions = styled.div`
  display: flex;
  flex: 1;
  gap: 20px;
`;

export const Select = styled.select`
  width: 45%;
  height: 32px;
  padding: 5px 16px 5px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border-color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  font-size: 13px;
`;

export const SearchButton = styled.button`
  width: 12%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: 700;
  font-size: 13px;
  line-height: 160%;
  border: 0;
`;

export const Divider = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin: 24px 0 24px 0;
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  padding: 5px 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  border-radius: 5px;
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;

export const SubSection = styled.div`
  width: 60%;
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

export const BackLink = styled.a`
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;
