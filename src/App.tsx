import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { CartContextProvider } from "./contexts/CartContext";
import { FormContextProvider } from "./contexts/FormContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <FormContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </FormContextProvider>
      </CartContextProvider>
    </ThemeProvider>
  )
}
