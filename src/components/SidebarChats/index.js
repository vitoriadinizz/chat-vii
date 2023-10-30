// Importa a biblioteca React
import React from "react";

// Importa o hook useAuthState do módulo "react-firebase-hooks/auth"
import { useAuthState } from "react-firebase-hooks/auth";

// Importa os objetos "auth" e "db" do módulo "../../services/firebase"
import { auth, db } from "../../services/firebase";

// Importa todos os membros do módulo "./styles" e os renomeia para "C"
import * as C from "./styles";

// Importa o hook useCollection do módulo "react-firebase-hooks/firestore"
import { useCollection } from "react-firebase-hooks/firestore";

// Importa o componente "SidebarChatsItem" do módulo "SidebarChatsItem"
import SidebarChatsItem from "../SidebarChatsItem";

// Declara um componente funcional chamado "SidebarChats" que recebe as propriedades "setUserChat" e "userChat"
const SidebarChats = ({ setUserChat, userChat }) => {
  // Utiliza o hook useAuthState para obter o estado de autenticação atual
  const [user] = useAuthState(auth);

  // Cria uma referência a uma coleção de chats em que o usuário atual está envolvido
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);

  // Utiliza o hook useCollection para obter um instantâneo da coleção de chats
  const [chatsSnapshot] = useCollection(refChat);

  // Renderiza o componente "SidebarChats"
  return (
    <C.Container>
      {/* Mapeia os documentos do instantâneo de chats e renderiza um componente "SidebarChatsItem" para cada chat */}
      {chatsSnapshot?.docs.map((item, index) => (
        <C.Content key={index}>
          <SidebarChatsItem
            id={item.id}
            users={item.data().users}
            user={user}
            setUserChat={setUserChat}
            active={userChat?.chatId === item.id ? "active" : ""}
          />
          {/* Renderiza um divisor entre os chats */}
          <C.Divider />
        </C.Content>
      ))}
    </C.Container>
  );
};

// Exporta o componente "SidebarChats" como o componente padrão deste módulo
export default SidebarChats;

