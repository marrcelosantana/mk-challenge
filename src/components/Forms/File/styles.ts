import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  border-radius: 20px;
  padding: 20px 29px;
  min-height: 324px;

  @media (max-width: 414px) {
    padding: 14px;
  }
`;

export const Section = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${({ theme }) => theme.COLORS.DARK_GREEN};
  width: 427px;
  height: 71px;
  cursor: pointer;
  border-radius: 5px;
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

export const Label = styled.label``;

export const LabelSubtitle = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
`;

export const Input = styled.input``;

export const Span = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};
`;

export const Divider = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin: 24px 0 24px 0;
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
  cursor: pointer;
`;

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return "#63d391";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#4b8db5";
  }
  return "#205266";
};

export const Dropzone = styled.div`
  width: 427px;
  height: 71px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 2px dashed ${({ theme }) => theme.COLORS.DARK_GREEN};
  border-radius: 4px;
  border-color: ${(props) => getColor(props)};
  outline: none;
  transition: border 0.24s ease-in-out;

  @media (max-width: 414px) {
    width: 100%;
    padding: 10px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const DropzoneInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const DropzoneText = styled.p`
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;

  @media (max-width: 414px) {
    font-size: 8px;
  }
`;

export const DropzoneSubtitle = styled.p`
  color: #9ea1b0;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;

  @media (max-width: 414px) {
    font-size: 8px;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const Preview = styled.div`
  width: 427px;
  height: 71px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 2px dashed ${({ theme }) => theme.COLORS.DARK_GREEN};
  border-radius: 4px;
  outline: none;
  transition: border 0.24s ease-in-out;
  margin-bottom: 12px;

  @media (max-width: 414px) {
    width: 100%;
    padding: 10px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const PreviewInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Thumb = styled.img`
  width: 40px;
  height: 40px;
`;

export const PreviewTextContainer = styled.div``;

export const PreviewTitle = styled.p`
  color: ${({ theme }) => theme.COLORS.DARK_GREEN};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;

  @media (max-width: 414px) {
    font-size: 10px;
  }
`;

export const PreviewSubtitle = styled.p`
  color: #9ea1b0;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;

  @media (max-width: 414px) {
    font-size: 8px;
  }
`;

export const PreviewActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  svg {
    cursor: pointer;
  }
`;
