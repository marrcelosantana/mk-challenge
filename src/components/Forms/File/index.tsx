import { Container, Input, Line, Section, Title } from "./styles";

export function File() {
  return (
    <Container>
      <Section>
        <Title>Anexar arquivos</Title>
        <Line />

        <Section style={{ marginTop: 24 }}>
          <Input type="file" name="file" id="file" />
        </Section>
      </Section>
    </Container>
  );
}
