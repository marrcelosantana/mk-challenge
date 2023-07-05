import { Container, Option, OptionName, OptionNumber } from "./styles";

export function Menu() {
  const options = [
    "Produto",
    "Cliente",
    "Anexar Arquivo",
    "Pagamentos",
    "Contrato",
  ];

  return (
    <Container>
      {options.map((option, index) => (
        <Option>
          <OptionNumber>{index + 1}</OptionNumber>
          <OptionName>{option}</OptionName>
        </Option>
      ))}
    </Container>
  );
}
