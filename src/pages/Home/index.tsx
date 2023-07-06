import { useTranslation } from "react-i18next";

import { Header } from "@/components/Header";
import { AppRoutes } from "@/routes/routes";

import BrazilFlag from "@/assets/brazil_flag.svg";
import EnglandFlag from "@/assets/england_flag.svg";

import {
  Column,
  Container,
  Content,
  Flag,
  Flags,
  FormContainer,
  Subtitle,
  Title,
  Titles,
} from "./styles";

export function Home() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <Header />

      <Content>
        <Column />

        <FormContainer>
          <Flags>
            <Flag src={BrazilFlag} onClick={() => changeLanguage("pt")} />
            <Flag src={EnglandFlag} onClick={() => changeLanguage("en")} />
          </Flags>

          <Titles>
            <Title>{t("Vendas")}</Title>
            <Subtitle>{t("Nova venda")}</Subtitle>
          </Titles>

          <AppRoutes />
        </FormContainer>
      </Content>
    </Container>
  );
}
