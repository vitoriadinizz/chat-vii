// Importa as bibliotecas React e useState do React
import React, { useState } from "react";

// Importa todos os membros do módulo "./styles" e os renomeia para "C"
import * as C from "./styles";

// Importa o ícone MdSend do módulo "react-icons/md"
import { MdSend } from "react-icons/md";

// Importa os objetos "auth" e "db" do módulo "../../services/firebase"
import { auth, db } from "../../services/firebase";

// Importa o hook useAuthState do módulo "react-firebase-hooks/auth"
import { useAuthState } from "react-firebase-hooks/auth";

// Importa o objeto "firebase" do módulo "firebase/compat/app"
import firebase from "firebase/compat/app";

// Declara um componente funcional chamado "ChatFooter" que recebe a propriedade "chatId"
const ChatFooter = ({ chatId }) => {
  // Utiliza o hook useAuthState para obter o estado de autenticação atual
  const [user] = useAuthState(auth);

  // Cria um estado local "message" e uma função "setMessage" para atualizá-lo
  const [message, setMessage] = useState("");

  // Define a função "handleSendMessage" para enviar uma mensagem
  const handleSendMessage = (e) => {
    e.preventDefault();

    // Adiciona uma nova mensagem à coleção de mensagens do chat no Firebase Firestore
    db.collection("chats").doc(chatId).collection("messages").add({
      message: message,
      user: user.email,
      photoURL: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // Limpa o campo de mensagem
    setMessage("");
  };

  // Renderiza o componente "ChatFooter"
  return (
    <C.Container>
      <C.Form onSubmit={handleSendMessage}>
        <C.Input
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <MdSend onClick={handleSendMessage} />
      </C.Form>
    </C.Container>
  );
};

// Exporta o componente "ChatFooter" como o componente padrão deste módulo
export default ChatFooter;
