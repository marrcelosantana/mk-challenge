import { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  model?: string;
}

export function Button({
  title = "Clique",
  model = "default",
  ...rest
}: Props) {
  return (
    <Container {...rest} model={model}>
      {title}
    </Container>
  );
}
