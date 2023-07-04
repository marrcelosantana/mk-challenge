import { Header } from "@/components/Header";
import { Subtotal } from "@/components/Subtotal";

import {
  Column,
  Container,
  Content,
  FormContainer,
  Subtitle,
  Title,
  Titles,
} from "./styles";

export function Home() {
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

          <Subtotal />
        </FormContainer>
      </Content>
    </Container>
  );
}
