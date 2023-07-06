import { useTranslation } from "react-i18next";
import { Container, Option, OptionName, OptionNumber } from "./styles";

export function Menu() {
  const { t } = useTranslation();

  return (
    <Container>
      <Option to="/product">
        <OptionNumber>1</OptionNumber>
        <OptionName>{t("Produto")}</OptionName>
      </Option>

      <Option to="/">
        <OptionNumber>2</OptionNumber>
        <OptionName>{t("Cliente")}</OptionName>
      </Option>

      <Option to="/file">
        <OptionNumber>3</OptionNumber>
        <OptionName>{t("Anexar arquivo")}</OptionName>
      </Option>

      <Option to="/pay">
        <OptionNumber>4</OptionNumber>
        <OptionName>{t("Pagamentos")}</OptionName>
      </Option>

      <Option to="/contract">
        <OptionNumber>5</OptionNumber>
        <OptionName>{t("Contrato")}</OptionName>
      </Option>
    </Container>
  );
}
