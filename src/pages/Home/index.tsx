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
  const options = [
    "Produto",
    "Cliente",
    "Anexar Arquivo",
    "Pagamentos",
    "Contrato",
  ];

  const status = ["InProgress", "Done"];

  const [optionSelected, setOptionSelected] = useState("Cliente");

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
