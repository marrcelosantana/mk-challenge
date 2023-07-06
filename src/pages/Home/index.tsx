import { useState } from "react";

import { Header } from "@/components/Header";
import { Subtotal } from "@/components/Subtotal";

import { Client } from "@/components/Forms/Client";
import { File } from "@/components/Forms/File";

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
  const tabs = [
    "Produto",
    "Cliente",
    "Anexar Arquivo",
    "Pagamentos",
    "Contrato",
  ];

  const status = ["InProgress", "Done"];

  const [tabSelected, setTabSelected] = useState("Cliente");

  return (
    <Container>
      <Header />

      <Content>
        <Column />

        <FormContainer>
          <Titles>
            <Title>Vendas</Title>
            <Subtitle>Nova venda</Subtitle>
          </Titles>

          <Menu>
            {tabs.map((tab, index) => (
              <Option key={index + 1} onClick={() => setTabSelected(tab)}>
                <OptionNumber>{index + 1}</OptionNumber>
                <OptionName>{tab}</OptionName>
              </Option>
            ))}
          </Menu>
          <Subtotal />

          {tabSelected === "Cliente" && <Client></Client>}
          {tabSelected === "Anexar Arquivo" && <File></File>}
        </FormContainer>
      </Content>
    </Container>
  );
}
