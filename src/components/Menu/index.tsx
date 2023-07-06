import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Option, OptionName, OptionNumber } from "./styles";

export function Menu() {
  const { t } = useTranslation();

  const [selectedOption, setSelectedOption] = useState("client");

  return (
    <Container data-testid="navlink-testId">
      <Option to="/product" onClick={() => setSelectedOption("product")}>
        <OptionNumber>1</OptionNumber>
        <OptionName option="product" selectedOption={selectedOption}>
          {t("Produto")}
        </OptionName>
      </Option>

      <Option to="/" onClick={() => setSelectedOption("client")}>
        <OptionNumber>2</OptionNumber>
        <OptionName option="client" selectedOption={selectedOption}>
          {t("Cliente")}
        </OptionName>
      </Option>

      <Option to="/file" onClick={() => setSelectedOption("file")}>
        <OptionNumber>3</OptionNumber>
        <OptionName option="file" selectedOption={selectedOption}>
          {t("Anexar arquivo")}
        </OptionName>
      </Option>

      <Option to="/pay" onClick={() => setSelectedOption("pay")}>
        <OptionNumber>4</OptionNumber>
        <OptionName option="pay" selectedOption={selectedOption}>
          {t("Pagamentos")}
        </OptionName>
      </Option>

      <Option to="/contract" onClick={() => setSelectedOption("contract")}>
        <OptionNumber>5</OptionNumber>
        <OptionName option="contract" selectedOption={selectedOption}>
          {t("Contrato")}
        </OptionName>
      </Option>
    </Container>
  );
}
