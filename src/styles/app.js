import styled from "styled-components";
//Aqui, estamos importando a biblioteca styled-components. Ela é uma biblioteca popular para criar estilos CSS em componentes React.

export const Container = styled.div`
//isso define uma constante chamada Container que recebe um componente estilizado. O componente estilizado é criado a partir de um elemento div.
 
display: flex;
  //torna o componente um contêiner flexível, permitindo a organização flexível dos elementos internos em relação ao espaço disponível.
  
  width: 100%;
  //estabelece que a largura do componente ocupará 100% da largura do elemento pai, preenchendo todo o espaço horizontal disponível.
  
  height: 100vh;
  // faz o componente ocupar toda a altura da janela do navegador, tornando-o do mesmo tamanho que a altura visível da tela.
`;
