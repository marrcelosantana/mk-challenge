import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Container, Option, OptionName, OptionNumber } from "./styles";

export function Menu() {
  const { t } = useTranslation();

  const [selectedOption, setSelectedOption] = useState("client");

  return (
    <Container>
      <Button onClick={() => setSelectedOption("product")}>
        <Option to="/product">
          <OptionNumber>1</OptionNumber>
          <OptionName option="product" selectedOption={selectedOption}>
            {t("Produto")}
          </OptionName>
        </Option>
      </Button>

      <Button onClick={() => setSelectedOption("client")}>
        <Option to="/">
          <OptionNumber>2</OptionNumber>
          <OptionName option="client" selectedOption={selectedOption}>
            {t("Cliente")}
          </OptionName>
        </Option>
      </Button>

      <Button onClick={() => setSelectedOption("file")}>
        <Option to="/file">
          <OptionNumber>3</OptionNumber>
          <OptionName option="file" selectedOption={selectedOption}>
            {t("Anexar arquivo")}
          </OptionName>
        </Option>
      </Button>

      <Button onClick={() => setSelectedOption("pay")}>
        <Option to="/pay">
          <OptionNumber>4</OptionNumber>
          <OptionName option="pay" selectedOption={selectedOption}>
            {t("Pagamentos")}
          </OptionName>
        </Option>
      </Button>

      <Button onClick={() => setSelectedOption("contract")}>
        <Option to="/contract">
          <OptionNumber>5</OptionNumber>
          <OptionName option="contract" selectedOption={selectedOption}>
            {t("Contrato")}
          </OptionName>
        </Option>
      </Button>
    </Container>
  );
}
