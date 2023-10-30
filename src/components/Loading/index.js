// Importa a biblioteca React
import React from "react";

// Importa o componente "Circle" do módulo "better-react-spinkit"
import { Circle } from "better-react-spinkit";

// Importa todos os membros do módulo "./styles" e os renomeia para "C"
import * as C from "./styles";

// Declara um componente funcional chamado "Loading"
const Loading = () => {
  // Renderiza o componente "Loading"
  return (
    <C.Container>
      {/* Renderiza o componente "Circle" para exibir uma animação de carregamento em forma de círculo */}
      <Circle />
    </C.Container>
  );
};

// Exporta o componente "Loading" como o componente padrão deste módulo
export default Loading;
