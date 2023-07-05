import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  border-radius: 20px;
  padding: 20px 29px;
`;

export const Section = styled.div`
  width: 100%;
`;

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

export const Label = styled.label`
  padding: 13px 16px;
  border: 2px dashed ${({ theme }) => theme.COLORS.DARK_GREEN};
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};
`;

export const LabelSubtitle = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
`;

export const Input = styled.input`
  display: none;
`;

export const Span = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};
`;
