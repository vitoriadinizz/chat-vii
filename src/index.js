import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/global";

const root = createRoot(document.querySelector("#root")); // Cria uma raiz de renderização no elemento com o id "root" no HTML.

root.render(
  <>
    <App /> // Renderiza o componente App, que representa a aplicação principal.
    <GlobalStyle /> // Renderiza o componente GlobalStyle, que aplica estilos globais à aplicação.
  </>
);