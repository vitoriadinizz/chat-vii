// Importa a biblioteca React
import React from "react";

// Importa todos os membros do módulo "./styles" e os renomeia para "C"
import * as C from "./styles";

// Importa os ícones MdDonutLarge, MdChat e MdMoreVert do módulo "react-icons/md"
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";

// Importa a biblioteca de validação de e-mail "EmailValidator"
import * as EmailValidator from "email-validator";

// Importa os objetos "auth" e "db" do módulo "../../services/firebase"
import { auth, db } from "../../services/firebase";

// Importa o hook useAuthState do módulo "react-firebase-hooks/auth"
import { useAuthState } from "react-firebase-hooks/auth";

// Importa o hook useCollection do módulo "react-firebase-hooks/firestore"
import { useCollection } from "react-firebase-hooks/firestore";

// Declara um componente funcional chamado "SidebarHeader" que recebe a propriedade "setUserChat"
const SidebarHeader = ({ setUserChat }) => {
  // Utiliza o hook useAuthState para obter o estado de autenticação atual
  const [user] = useAuthState(auth);

  // Cria uma referência a uma coleção de chats em que o usuário atual está envolvido
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);

  // Utiliza o hook useCollection para obter um instantâneo da coleção de chats
  const [chatsSnapshot] = useCollection(refChat);

  // Define a função "handleCreateChat" para criar um novo chat
  const handleCreateChat = () => {
    // Solicita que o usuário insira o e-mail desejado
    const emailInput = prompt("Escreva o e-mail desejado");

    if (!emailInput) return;

    // Valida se o e-mail inserido é válido
    if (!EmailValidator.validate(emailInput)) {
      return alert("E-mail inválido!");
    } else if (emailInput === user.email) {
      return alert("Insira um e-mail diferente do seu!");
    } else if (chatExists(emailInput)) {
      return alert("Chat já existe!");
    }

    // Cria um novo chat na coleção "chats" com os usuários envolvidos
    db.collection("chats").add({
      users: [user.email, emailInput],
    });
  };

  // Verifica se um chat já existe com base no e-mail inserido
  const chatExists = (emailChat) => {
    return !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };

  // Renderiza o componente "SidebarHeader"
  return (
    <C.Container>
      {/* Renderiza o avatar do usuário com a foto de perfil, e permite fazer logout ao clicar no avatar */}
      <C.Avatar
        src={user?.photoURL}
        onClick={() => [auth.signOut(), setUserChat(null)]}
      />
      {/* Renderiza os ícones de ação, incluindo MdDonutLarge, MdChat e MdMoreVert */}
      <C.Options>
        <MdDonutLarge />
        <MdChat onClick={handleCreateChat} />
        <MdMoreVert />
      </C.Options>
    </C.Container>
  );
};

// Exporta o componente "SidebarHeader" como o componente padrão deste módulo
export default SidebarHeader;
