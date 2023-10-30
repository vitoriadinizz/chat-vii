// Importa as bibliotecas React, useEffect e useRef do React
import React, { useEffect, useRef } from "react";

// Importa o objeto "db" do módulo "../../services/firebase"
import { db } from "../../services/firebase";

// Importa todos os membros do módulo "./styles" e os renomeia para "C"
import * as C from "./styles";

// Importa o hook useCollection do módulo "react-firebase-hooks/firestore"
import { useCollection } from "react-firebase-hooks/firestore";

// Importa o componente "Message" do diretório "../Message"
import Message from "../Message";

// Declara um componente funcional chamado "ChatBody" que recebe a propriedade "chatId"
const ChatBody = ({ chatId }) => {
  // Utiliza o hook useCollection para obter a coleção de mensagens ordenadas por timestamp
  const [messagesRes] = useCollection(
    db
      .collection("chats")
      .doc(chatId)
      .collection("messages")
      .orderBy("timestamp", "asc")
  );

  // Cria uma referência para o elemento com a variável "refBody"
  const refBody = useRef("");

  // Utiliza o hook useEffect para executar código após a renderização e quando "messagesRes" mudar
  useEffect(() => {
    // Verifica se a altura da barra de rolagem é maior que a altura do elemento
    if (refBody.current.scrollHeight > refBody.current.offsetHeight) {
      // Define a posição da barra de rolagem para mostrar as mensagens mais recentes
      refBody.current.scrollTop =
        refBody.current.scrollHeight - refBody.current.offsetHeight;
    }
  }, [messagesRes]);

  // Renderiza o componente "ChatBody" com uma referência ao elemento "refBody"
  return (
    <C.Container ref={refBody}>
      {/* Mapeia as mensagens e renderiza o componente "Message" para cada mensagem */}
      {messagesRes?.docs.map((message) => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            message: message.data().message,
            timestamp: message.data().timestamp?.toDate().getTime(),
          }}
        />
      ))}
    </C.Container>
  );
};

// Exporta o componente "ChatBody" como o componente padrão deste módulo
export default ChatBody;

