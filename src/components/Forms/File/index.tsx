import { useEffect } from "react";
import { useTheme } from "styled-components";

import { useDropzone } from "react-dropzone";
import { ArrowCircleDown, ArrowCircleUp, Trash } from "@phosphor-icons/react";

import { Button } from "@/components/Button";

import {
  Container,
  Footer,
  Dropzone,
  Line,
  Section,
  Title,
  Divider,
  BackLink,
  Input,
  DropzoneText,
  Bold,
  DropzoneSubtitle,
  DropzoneInfo,
  Preview,
  PreviewInfo,
  PreviewTextContainer,
  PreviewTitle,
  PreviewSubtitle,
  PreviewActions,
} from "./styles";

export function File() {
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "text/xls": [".xls"],
      "application/pdf": [".pdf"],
      "text/word": [".word"],
      "image/png": [".png"],
      "image/jpg": [".jpg"],
    },
  });

  const files = acceptedFiles;

  const theme = useTheme();

  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <Container>
      <Section>
        <Title>Anexar arquivos</Title>
        <Line />

        {files.length === 0 ? (
          <Dropzone
            {...getRootProps({ isFocused, isDragAccept, isDragReject })}
          >
            <Input {...getInputProps()} />

            <DropzoneInfo>
              <DropzoneText>
                Arraste para dentro ou{" "}
                <Bold style={{ fontWeight: "bold" }}>clique</Bold> para
                selecionar um arquivo
              </DropzoneText>

              <DropzoneSubtitle>
                Formatos suportados: PDF, Word, JPG, XLS e PNG
              </DropzoneSubtitle>
            </DropzoneInfo>

            <ArrowCircleUp size={22} color={theme.COLORS.DARK_BLUE} />
          </Dropzone>
        ) : (
          <Preview>
            <PreviewInfo>
              <PreviewTextContainer>
                <PreviewTitle>{files[0].name}</PreviewTitle>
                <PreviewSubtitle>{files[0].size} KB</PreviewSubtitle>
              </PreviewTextContainer>
            </PreviewInfo>

            <PreviewActions>
              <ArrowCircleDown size={20} color={theme.COLORS.DARK_BLUE} />
              <Trash size={20} color="#F92828" />
            </PreviewActions>
          </Preview>
        )}
      </Section>

      <Divider />

      <Footer>
        <Button title="Continuar" model="secondary" />
        <BackLink>Voltar</BackLink>
      </Footer>
    </Container>
  );
}
