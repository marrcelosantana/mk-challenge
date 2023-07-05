import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default-theme";
import { GlobalStyle } from "./styles/global";

import { Home } from "@/pages/Home";
import { ClientContextProvider } from "@/contexts/ClientContext";

function App() {
  return (
    <ClientContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </ClientContextProvider>
  );
}
export default App;
