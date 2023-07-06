import { useTheme } from "styled-components";
import { CaretDown } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { Amount, Container, Info, Title, Titles } from "./styles";

export function Subtotal() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Container>
      <Info>
        <Titles>
          <Title>{t("Subtotal")}</Title>
          <Amount>R$ 114,75</Amount>
        </Titles>

        <CaretDown size={14} color={theme.COLORS.GREEN} weight="bold" />
      </Info>
    </Container>
  );
}
