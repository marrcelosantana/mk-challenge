import { Button } from "@/components/Button";

import {
  Actions,
  BackLink,
  Container,
  Divider,
  Footer,
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

export function Product() {
  return (
    <Container>
      <Section>
        <Title>Buscar cliente</Title>
        <Line />
        <Subtitle>Buscar cliente</Subtitle>

        <Actions>
          <Select>
            <option selected disabled>
              Selecione uma pessoa...
            </option>
          </Select>

          <SearchButton>Buscar</SearchButton>
          <Button title="Adcionar pessoas" model="primary" />
        </Actions>
      </Section>
      <Divider />

      <Section>
        <InputContainer>
          <Label>Nome completo</Label>
          <Input style={{ width: "60%" }} />
        </InputContainer>

        <SubSection>
          <InputContainer>
            <Label>CPF</Label>
            <Input style={{ width: 149 }} />
          </InputContainer>

          <InputContainer>
            <Label>IE/RG</Label>
            <Input style={{ width: 128 }} />
          </InputContainer>

          <InputContainer>
            <Label>Órgão emissor</Label>
            <Input style={{ width: 107 }} />
          </InputContainer>
        </SubSection>

        <SubSection>
          <InputContainer>
            <Label>Telefone</Label>
            <Input />
          </InputContainer>

          <InputContainer>
            <Label>Celular</Label>
            <Input />
          </InputContainer>
        </SubSection>
      </Section>
      <Divider />

      <Section>
        <InputContainer>
          <Label>Data de nascimento</Label>
          <Input />
        </InputContainer>

        <InputContainer>
          <Label>Nacionalidade</Label>
          <Input />
        </InputContainer>

        <InputContainer>
          <Label>Estado de nascimento</Label>
          <Select>
            <option selected disabled>
              Selecione a estado de nascimento...
            </option>
          </Select>
        </InputContainer>

        <InputContainer>
          <Label>Naturalidade (Cidade de nascimento)</Label>
          <Select>
            <option selected disabled>
              Selecione a naturalidade...
            </option>
          </Select>
        </InputContainer>
      </Section>
      <Divider />

      <Section>
        <InputContainer>
          <Label>Estado civil</Label>
          <Select style={{ width: "25%" }}>
            <option selected disabled>
              Selecione o estado civil...
            </option>
          </Select>
        </InputContainer>

        <InputContainer>
          <Label>Sexo</Label>
          <Select style={{ width: "25%" }}>
            <option selected disabled>
              Selecione o sexo...
            </option>
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
    </Container>
  );
}
