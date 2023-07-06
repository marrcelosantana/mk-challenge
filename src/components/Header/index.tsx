import { useTheme } from "styled-components";

import Logo from "@/assets/logo.svg";
import { Bell, User } from "@phosphor-icons/react";

import { Actions, Button, Container, Image } from "./styles";

export function Header() {
  const theme = useTheme();

  return (
    <Container>
      <Image src={Logo} alt="Logo MK Next" />

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
