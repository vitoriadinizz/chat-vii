// Importa a biblioteca React
import React from "react";

// Importa os objetos "auth" e "provider" do módulo "../../services/firebase"
import { auth, provider } from "../../services/firebase";

// Importa todos os membros do módulo "./styles" e os renomeia para "C"
import * as C from "./styles";

// Declara um componente funcional chamado "Login"
const Login = () => {
  // Define a função "handleSignin" para lidar com o processo de login
  const handleSignin = () => {
    // Chama o método "signInWithPopup" do objeto "auth" para iniciar o processo de autenticação com o provedor (Google)
    auth.signInWithPopup(provider).catch(alert);
  };

  // Renderiza o componente "Login"
  return (
    <C.Container>
      {/* Renderiza um botão com o texto "Login com Google" e associa o evento "onClick" à função "handleSignin" */}
      <C.Button onClick={handleSignin}>Login com Google</C.Button>
    </C.Container>
  );
};

// Exporta o componente "Login" como o componente padrão deste módulo
export default Login;
