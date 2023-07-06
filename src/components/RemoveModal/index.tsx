import * as Dialog from "@radix-ui/react-dialog";
import { X } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

import {
  BackLink,
  CloseButton,
  Content,
  DeleteButton,
  Divider,
  Footer,
  Line,
  Overlay,
  Subtitle,
  Title,
} from "./styles";

interface Props {
  setOpenModal: (bool: boolean) => void;
  handleRemoveFile: (name: string) => void;
  file: any;
}

export function RemoveModal({ file, setOpenModal, handleRemoveFile }: Props) {
  const { t } = useTranslation();

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>{t("Tem certeza que deseja excluir este arquivo?")}</Title>
        <Line />

        <Subtitle>
          {t("As mudanças serão salvas e a ação não poderá ser desfeita.")}
        </Subtitle>

        <Divider />
        <Footer>
          <BackLink onClick={() => setOpenModal(false)}>{t("Voltar")}</BackLink>
          <DeleteButton onClick={() => handleRemoveFile(file.name)}>
            {t("Excluir")}
          </DeleteButton>
        </Footer>
        <CloseButton onClick={() => setOpenModal(false)}>
          <X size={18} />
        </CloseButton>
      </Content>
    </Dialog.Portal>
  );
}
