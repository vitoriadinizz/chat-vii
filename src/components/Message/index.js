// Importa a biblioteca React
import React from "react";

// Importa todos os membros do módulo "./styles" e os renomeia para "C"
import * as C from "./styles";

// Importa o hook useAuthState do módulo "react-firebase-hooks/auth"
import { useAuthState } from "react-firebase-hooks/auth";

// Importa o objeto "auth" do módulo "../../services/firebase"
import { auth } from "../../services/firebase";

// Declara um componente funcional chamado "Message" que recebe as propriedades "user" e "message"
const Message = ({ user, message }) => {
  // Utiliza o hook useAuthState para obter o estado de autenticação atual
  const [userLoggedIn] = useAuthState(auth);

  // Renderiza o componente "Message"
  return (
    <C.Container>
      {/* Renderiza um contêiner com uma classe "me" se o usuário atual (logado) for o mesmo que o usuário da mensagem */}
      <C.Line className={userLoggedIn?.email === user ? "me" : ""}>
        <C.Content>
          <C.Message>{message.message}</C.Message>
          <C.MessageDate>
            {/* Exibe a data e hora da mensagem formatada como uma string legível por humanos */}
            {new Date(message?.timestamp).toLocaleString()}
          </C.MessageDate>
        </C.Content>
      </C.Line>
    </C.Container>
  );
};

// Exporta o componente "Message" como o componente padrão deste módulo
export default Message;
