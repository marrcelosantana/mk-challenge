import { useTheme } from "styled-components";

import Logo from "@/assets/logo.svg";
import { Bell, User } from "@phosphor-icons/react";

import BrazilFlag from "@/assets/brazil_flag.svg";
import EnglandFlag from "@/assets/england_flag.svg";

import { useTranslation } from "react-i18next";

import { Actions, Button, Container, Flag, Flags, Image } from "./styles";

export function Header() {
  const theme = useTheme();

  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container>
      <Image src={Logo} alt="Logo MK Next" />

      <Flags>
        <Flag src={BrazilFlag} onClick={() => changeLanguage("pt")} />
        <Flag src={EnglandFlag} onClick={() => changeLanguage("en")} />
      </Flags>

      <Actions>
        <Button>
          <Bell size={24} color={theme.COLORS.DARK_BLUE} weight="bold" />
        </Button>
        <Button>
          <User size={24} color={theme.COLORS.DARK_BLUE} weight="bold" />
        </Button>
      </Actions>
    </Container>
  );
}
