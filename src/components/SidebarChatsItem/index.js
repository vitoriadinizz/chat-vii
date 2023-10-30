// Importa a biblioteca React
import React from "react";

// Importa o hook useCollection do módulo "react-firebase-hooks/firestore"
import { useCollection } from "react-firebase-hooks/firestore";

// Importa o objeto "db" do módulo "../../services/firebase"
import { db } from "../../services/firebase";

// Importa todos os membros do módulo "./styles" e os renomeia para "C"
import * as C from "./styles";

// Importa o ícone MdPerson do módulo "react-icons/md"
import { MdPerson } from "react-icons/md";

// Declara uma função chamada "getUser" que recebe um array de usuários e o usuário logado e retorna o primeiro usuário diferente do usuário logado
const getUser = (users, userLogged) =>
  users?.filter((user) => user !== userLogged?.email)[0];

// Declara um componente funcional chamado "SidebarChatsItem" que recebe as propriedades "id", "users", "user", "setUserChat" e "active"
const SidebarChatsItem = ({ id, users, user, setUserChat, active }) => {
  // Utiliza o hook useCollection para obter um instantâneo de documentos da coleção de usuários com base no email do outro usuário do chat
  const [getUserItem] = useCollection(
    db.collection("users").where("email", "==", getUser(users, user))
  );

  // Obtém os dados do usuário do item obtido do banco de dados
  const Avatar = getUserItem?.docs?.[0]?.data();

  // Obtém o nome do outro usuário do chat
  const item = getUser(users, user);

  // Define a função "handleNewChat" para lidar com a criação de um novo chat
  const handleNewChat = () => {
    // Cria um objeto "userChat" com informações do chat selecionado
    const userChat = {
      chatId: id,
      name: item.split("@")[0],
      photoURL: Avatar?.photoURL,
    };

    // Chama a função "setUserChat" para configurar o chat do usuário
    setUserChat(userChat);
  };

  // Renderiza o componente "SidebarChatsItem"
  return (
    <C.Container onClick={handleNewChat} className={active}>
      {/* Renderiza um avatar do usuário, se disponível, ou o ícone "MdPerson" caso contrário */}
      {Avatar ? <C.Avatar src={Avatar?.photoURL} /> : <MdPerson />}
      {/* Renderiza o nome do outro usuário do chat obtido do endereço de email do usuário */}
      <C.Name>{item.split("@")[0]}</C.Name>
    </C.Container>
  );
};

// Exporta o componente "SidebarChatsItem" como o componente padrão deste módulo
export default SidebarChatsItem;
