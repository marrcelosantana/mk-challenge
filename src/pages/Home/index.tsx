import { Header } from "@/components/Header";
import { Subtotal } from "@/components/Subtotal";
import { Menu } from "@/components/Menu";
import { Product } from "@/components/Forms/Product";

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

          <Menu />
          <Subtotal />

          <Product />
        </FormContainer>
      </Content>
    </Container>
  );
}
