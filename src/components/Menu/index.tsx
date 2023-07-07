import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Option, OptionName, OptionNumber } from "./styles";

export function Menu() {
  const { t } = useTranslation();

  const [selectedOption, setSelectedOption] = useState("client");

  return (
    <Container data-testid="navlink-testId">
      <Option
        data-testid="option-product-testId"
        to="/product"
        onClick={() => setSelectedOption("product")}
      >
        <OptionNumber>1</OptionNumber>
        <OptionName option="product" selected_option={selectedOption}>
          {t("Produto")}
        </OptionName>
      </Option>

      <Option
        data-testid="option-client-testId"
        to="/"
        onClick={() => setSelectedOption("client")}
      >
        <OptionNumber>2</OptionNumber>
        <OptionName option="client" selected_option={selectedOption}>
          {t("Cliente")}
        </OptionName>
      </Option>

      <Option
        data-testid="option-file-testId"
        to="/file"
        onClick={() => setSelectedOption("file")}
      >
        <OptionNumber>3</OptionNumber>
        <OptionName option="file" selected_option={selectedOption}>
          {t("Anexar arquivo")}
        </OptionName>
      </Option>

      <Option
        data-testid="option-pay-testId"
        to="/pay"
        onClick={() => setSelectedOption("pay")}
      >
        <OptionNumber>4</OptionNumber>
        <OptionName option="pay" selected_option={selectedOption}>
          {t("Pagamentos")}
        </OptionName>
      </Option>

      <Option
        data-testid="option-contract-testId"
        to="/contract"
        onClick={() => setSelectedOption("contract")}
      >
        <OptionNumber>5</OptionNumber>
        <OptionName option="contract" selected_option={selectedOption}>
          {t("Contrato")}
        </OptionName>
      </Option>
    </Container>
  );
}
