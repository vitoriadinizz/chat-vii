// Importa a biblioteca React
import React from "react";

// Importa todos os membros do módulo "./styles" e os renomeia para "C"
import * as C from "./styles";

// Importa o ícone MdMessage do módulo "react-icons/md"
import { MdMessage } from "react-icons/md";

// Declara um componente funcional chamado "Default"
const Default = () => {
  // Renderiza o componente "Default"
  return (
    <C.Container>
      {/* Renderiza o ícone "MdMessage" (um ícone de mensagem) */}
      <MdMessage />
      <C.Title>WhatsApp</C.Title>
    </C.Container>
  );
};

// Exporta o componente "Default" como o componente padrão deste módulo
export default Default;
