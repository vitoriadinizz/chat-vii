// Importa a biblioteca React
import React from "react";

// Importa todos os membros do módulo "./styles" e os renomeia para "C"
import * as C from "./styles";

// Importa os ícones MdPerson, MdMoreVert e MdSearch do módulo "react-icons/md"
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";

// Declara um componente funcional chamado "ChatHeader" que recebe as propriedades "photoURL" e "name"
const ChatHeader = ({ photoURL, name }) => {
  // Renderiza o componente "ChatHeader"
  return (
    <C.Container>
      <C.UserInfo>
        {/* Renderiza um componente "Avatar" se "photoURL" estiver definido, caso contrário, renderiza o ícone "MdPerson" */}
        {photoURL ? <C.Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        <C.NameContent>
          {/* Renderiza o nome do usuário */}
          <C.Name>{name}</C.Name>
        </C.NameContent>
      </C.UserInfo>
      <C.Options>
        {/* Renderiza os ícones de pesquisa (MdSearch) e mais opções (MdMoreVert) */}
        <MdSearch />
        <MdMoreVert />
      </C.Options>
    </C.Container>
  );
};

// Exporta o componente "ChatHeader" como o componente padrão deste módulo
export default ChatHeader;
