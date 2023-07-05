import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default-theme";
import { GlobalStyle } from "./styles/global";

import { Home } from "@/pages/Home";

import { SalesContextProvider } from "./contexts/SalesContext";
import { IBGEContextProvider } from "./contexts/IBGEContext";

function App() {
  return (
    <SalesContextProvider>
      <IBGEContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Home />
        </ThemeProvider>
      </IBGEContextProvider>
    </SalesContextProvider>
  );
}
export default App;
