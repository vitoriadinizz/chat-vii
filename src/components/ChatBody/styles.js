// Importa a função "styled" da biblioteca "styled-components"
import styled from "styled-components";

// Define um componente estilizado chamado "Container" usando a função "styled"
export const Container = styled.div`
  // Define o estilo do componente
  flex: 1;               // Define o valor flex para 1 (o componente se expandirá para preencher o espaço disponível)
  background-color: #efeae2; // Define a cor de fundo como "#efeae2"
  overflow-y: auto;       // Habilita a barra de rolagem vertical quando o conteúdo ultrapassa a altura do contêiner

  // Define o estilo da barra de rolagem específica para navegadores baseados no motor Webkit (como o Google Chrome)
  &::-webkit-scrollbar {
    width: 6px;           // Define a largura da barra de rolagem como 6 pixels
    border-radius: 10px;  // Define um raio de borda de 10 pixels para a barra de rolagem
  }

  // Define o estilo do polegar (parte arrastável) da barra de rolagem específica para navegadores baseados no motor Webkit
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;  // Define um raio de borda de 10 pixels para o polegar da barra de rolagem
    background-color: rgba(0, 0, 0, 0.2); // Define a cor de fundo como um tom de cinza transparente
  }
`;
