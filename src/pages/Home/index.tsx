import { useState } from "react";

import { Header } from "@/components/Header";
import { Subtotal } from "@/components/Subtotal";

import { Client } from "@/components/Forms/Client";
import { File } from "@/components/Forms/File";

import { useTranslation } from "react-i18next";

import {
  Column,
  Container,
  Content,
  FormContainer,
  Menu,
  Option,
  OptionName,
  OptionNumber,
  Subtitle,
  Title,
  Titles,
} from "./styles";

export function Home() {
  const { t } = useTranslation();
  const [optionSelected, setOptionSelected] = useState("Cliente");

  return (
    <Container>
      <Header />

      <Content>
        <Column />

        <FormContainer>
          <Titles>
            <Title>{t("Vendas")}</Title>
            <Subtitle>{t("Nova venda")}</Subtitle>
          </Titles>

          <Menu>
            <Option onClick={() => setOptionSelected("Produto")}>
              <OptionNumber>1</OptionNumber>
              <OptionName option={"Produto"} optionSelected={optionSelected}>
                {t("Produto")}
              </OptionName>
            </Option>

            <Option onClick={() => setOptionSelected("Cliente")}>
              <OptionNumber>2</OptionNumber>
              <OptionName option={"Cliente"} optionSelected={optionSelected}>
                {t("Cliente")}
              </OptionName>
            </Option>

            <Option onClick={() => setOptionSelected("Anexar arquivo")}>
              <OptionNumber>3</OptionNumber>
              <OptionName
                option={"Anexar arquivo"}
                optionSelected={optionSelected}
              >
                {t("Anexar arquivo")}
              </OptionName>
            </Option>

            <Option onClick={() => setOptionSelected("Pagamentos")}>
              <OptionNumber>4</OptionNumber>
              <OptionName option={"Pagamentos"} optionSelected={optionSelected}>
                {t("Pagamentos")}
              </OptionName>
            </Option>

            <Option onClick={() => setOptionSelected("Contrato")}>
              <OptionNumber>5</OptionNumber>
              <OptionName option={"Contrato"} optionSelected={optionSelected}>
                {t("Contrato")}
              </OptionName>
            </Option>
          </Menu>
          <Subtotal />

          {optionSelected === "Cliente" && <Client></Client>}
          {optionSelected === "Anexar arquivo" && <File></File>}
        </FormContainer>
      </Content>
    </Container>
  );
}
