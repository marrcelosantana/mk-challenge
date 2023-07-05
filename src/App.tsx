import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default-theme";
import { GlobalStyle } from "./styles/global";

import { Home } from "@/pages/Home";
import { SalesContextProvider } from "./contexts/SalesContext";

function App() {
  return (
    <SalesContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </SalesContextProvider>
  );
}
export default App;
