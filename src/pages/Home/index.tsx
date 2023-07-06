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
  const options = [
    "Produto",
    "Cliente",
    "Anexar Arquivo",
    "Pagamentos",
    "Contrato",
  ];

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
            {options.map((option, index) => (
              <Option key={index + 1} onClick={() => setOptionSelected(option)}>
                <OptionNumber>{index + 1}</OptionNumber>
                <OptionName option={option} optionSelected={optionSelected}>
                  {option}
                </OptionName>
              </Option>
            ))}
          </Menu>
          <Subtotal />

          {optionSelected === "Cliente" && <Client></Client>}
          {optionSelected === "Anexar Arquivo" && <File></File>}
        </FormContainer>
      </Content>
    </Container>
  );
}
