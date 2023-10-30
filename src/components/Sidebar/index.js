// Importa a biblioteca React
import React from "react";

// Importa todos os membros do módulo "./styles" e os renomeia para "C"
import * as C from "./styles";

// Importa os componentes "SidebarHeader" e "SidebarChats" dos módulos relativos
import SidebarHeader from "./../SidebarHeader/index";
import SidebarChats from "./../SidebarChats/index";

// Declara um componente funcional chamado "Sidebar" que recebe as propriedades "setUserChat" e "userChat"
const Sidebar = ({ setUserChat, userChat }) => {
  // Renderiza o componente "Sidebar"
  return (
    <C.Container>
      {/* Renderiza o componente "SidebarHeader" e passa a propriedade "setUserChat" para ele */}
      <SidebarHeader setUserChat={setUserChat} />
      {/* Renderiza o componente "SidebarChats" e passa as propriedades "setUserChat" e "userChat" para ele */}
      <SidebarChats setUserChat={setUserChat} userChat={userChat} />
    </C.Container>
  );
};

// Exporta o componente "Sidebar" como o componente padrão deste módulo
export default Sidebar;
