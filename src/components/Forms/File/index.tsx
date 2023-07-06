import { useState } from "react";
import { useTheme } from "styled-components";

import { useDropzone } from "react-dropzone";
import { ArrowCircleDown, ArrowCircleUp, Trash } from "@phosphor-icons/react";

import { Button } from "@/components/Button";
import { RemoveModal } from "@/components/RemoveModal";

import * as Dialog from "@radix-ui/react-dialog";

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
  Thumb,
} from "./styles";

export function File() {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    accept: {
      "text/xls": [".xls"],
      "application/pdf": [".pdf"],
      "text/word": [".word"],
      "image/png": [".png"],
      "image/jpg": [".jpg"],
    },
    maxFiles: 2,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const [files, setFiles] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme();

  function removeFile(name: string) {
    const newArray = files.filter((file) => file.name !== name);
    setFiles(newArray);
    setOpenModal(false);
  }

  return (
    <Container>
      <Section>
        <Title>Anexar arquivos</Title>
        <Line />

        {files.map((file) => (
          <Preview>
            <PreviewInfo>
              {file.type === "image/jpeg" && <Thumb src={file.preview} />}
              <PreviewTextContainer>
                <PreviewTitle>{file.name}</PreviewTitle>
                <PreviewSubtitle>{file.size} KB</PreviewSubtitle>
              </PreviewTextContainer>
            </PreviewInfo>

            <PreviewActions>
              <ArrowCircleDown size={20} color={theme.COLORS.DARK_BLUE} />

              <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
                <Dialog.Trigger asChild>
                  <Trash
                    size={20}
                    color="#F92828"
                    onClick={() => setOpenModal(true)}
                  />
                </Dialog.Trigger>

                <RemoveModal
                  file={file}
                  setOpenModal={setOpenModal}
                  handleRemoveFile={removeFile}
                />
              </Dialog.Root>
            </PreviewActions>
          </Preview>
        ))}

        {files.length < 2 && (
          <Dropzone {...getRootProps({ className: "dropzone" })}>
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
