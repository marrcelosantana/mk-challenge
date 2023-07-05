import { useEffect, useState } from "react";

import { Button } from "@/components/Button";

import { useSales } from "@/hooks/useSales";
import { useIBGE } from "@/hooks/useIBGE";

import { genders, marital_status } from "@/utils/data";

import {
  Actions,
  BackLink,
  Container,
  Divider,
  FirstSubSection,
  Footer,
  Form,
  Input,
  InputContainer,
  Label,
  Line,
  SearchButton,
  Section,
  Select,
  SubSection,
  Subtitle,
  Title,
} from "./styles";

export function Client() {
  const { clients } = useSales();
  const { ufs, cities, handleSelectUf } = useIBGE();

  return (
    <Container>
      <Form>
        <Section>
          <Title>Buscar cliente</Title>
          <Line />
          <Subtitle>Buscar cliente</Subtitle>

          <Actions>
            <Select>
              <option selected disabled>
                Selecione uma pessoa...
              </option>
              {clients.map((client) => (
                <option key={client.id}>{client.name}</option>
              ))}
            </Select>

            <SearchButton>Buscar</SearchButton>
            <Button title="Adcionar pessoas" model="primary" />
          </Actions>
        </Section>
        <Divider />
      </Form>

      <Form>
        <Section>
          <FirstSubSection>
            <InputContainer>
              <Label>Nome completo</Label>
              <Input style={{ width: "60%" }} placeholder="Nome" />
            </InputContainer>
          </FirstSubSection>

          <SubSection>
            <InputContainer>
              <Label>CPF</Label>
              <Input style={{ width: 149 }} placeholder="000.000.000-00 " />
            </InputContainer>

            <InputContainer>
              <Label>IE/RG</Label>
              <Input style={{ width: 128 }} placeholder="IE ou RG" />
            </InputContainer>

            <InputContainer>
              <Label>Órgão emissor</Label>
              <Input style={{ width: 107 }} placeholder="OE" />
            </InputContainer>
          </SubSection>

          <SubSection>
            <InputContainer>
              <Label>Telefone</Label>
              <Input placeholder="(00) 0000-0000" />
            </InputContainer>

            <InputContainer>
              <Label>Celular</Label>
              <Input placeholder="(00) 0000-0000" />
            </InputContainer>
          </SubSection>
        </Section>
        <Divider />

        <Section>
          <InputContainer>
            <Label>Data de nascimento</Label>
            <Input placeholder="00/00/00" />
          </InputContainer>

          <InputContainer>
            <Label>Nacionalidade</Label>
            <Input placeholder="Nacionalidade" />
          </InputContainer>

          <InputContainer>
            <Label>Estado de nascimento</Label>
            <Select onChange={handleSelectUf}>
              <option selected disabled value="default-uf">
                Selecione a estado de nascimento...
              </option>
              {ufs.map((uf) => (
                <option key={uf.id} value={uf.sigla}>
                  {uf.nome}
                </option>
              ))}
            </Select>
          </InputContainer>

          <InputContainer>
            <Label>Naturalidade (Cidade de nascimento)</Label>
            <Select>
              <option selected disabled value="default-city">
                Selecione a cidade...
              </option>
              {cities.map((city) => (
                <option key={city.id} value={city.nome}>
                  {city.nome}
                </option>
              ))}
            </Select>
          </InputContainer>
        </Section>
        <Divider />

        <Section>
          <InputContainer>
            <Label>Estado civil</Label>
            <Select>
              <option selected disabled defaultValue="default">
                Selecione o estado civil...
              </option>
              {marital_status.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </InputContainer>

          <InputContainer>
            <Label>Sexo</Label>
            <Select>
              <option selected disabled defaultValue="default">
                Selecione o sexo...
              </option>
              {genders.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </InputContainer>
        </Section>
        <Divider />

        <Button title="Atualizar" model="default" />
        <Divider />

        <Footer>
          <Button title="Continuar" model="secondary" />
          <BackLink>Voltar</BackLink>
        </Footer>
      </Form>
    </Container>
  );
}
