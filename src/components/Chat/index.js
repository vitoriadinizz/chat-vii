// Importa a biblioteca React
import React from "react";

// Importa o componente ChatHeader do diretório "../ChatHeader"
import ChatHeader from "../ChatHeader";

// Importa todos os membros do módulo "./styles" e os renomeia para "C"
import * as C from "./styles";

// Importa o componente Default do diretório "./../Default"
import Default from "./../Default";

// Importa o componente ChatBody do diretório "../ChatBody"
import ChatBody from "../ChatBody";

// Importa o componente ChatFooter do diretório "../ChatFooter"
import ChatFooter from "../ChatFooter";

// Declara um componente funcional chamado Chat que recebe a propriedade userChat
const Chat = ({ userChat }) => {
  // Verifica se o userChat é falso (null ou undefined), e se for, renderiza o componente Default
  if (!userChat) return <Default />;

  // Se userChat não for falso, renderiza o seguinte código
  return (
    // Renderiza um componente Container do módulo "./styles"
    <C.Container>
      {/* Renderiza o componente ChatHeader passando as propriedades photoURL e name de userChat */}
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />

      {/* Renderiza o componente ChatBody passando a propriedade chatId de userChat */}
      <ChatBody chatId={userChat?.chatId} />

      {/* Renderiza o componente ChatFooter passando a propriedade chatId de userChat */}
      <ChatFooter chatId={userChat?.chatId} />
    </C.Container>
  );
};

// Exporta o componente Chat como o componente padrão deste módulo
export default Chat;

