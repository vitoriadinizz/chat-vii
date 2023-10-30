import React, { useEffect, useState } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import * as C from "./styles/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import Login from "./components/Login";
import Loading from "./components/Loading";

const App = () => {
  const [user, loading] = useAuthState(auth); // Utiliza a autenticação do Firebase para obter o usuário atual e verifica se está carregando.

  const [userChat, setUserChat] = useState(null); // Define o estado para o usuário do chat.

  useEffect(() => {
    if (user) {
      // Se um usuário estiver autenticado, atualiza informações no banco de dados Firestore.
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  if (loading) return <Loading />; // Se o carregamento estiver em andamento, exibe um componente de carregamento.

  if (!user) return <Login />; // Se o usuário não estiver autenticado, exibe o componente de login.

  // Renderiza o aplicativo, exibindo o Sidebar e o Chat.
  return (
    <C.Container>
      <Sidebar setUserChat={setUserChat} userChat={userChat} />
      <Chat userChat={userChat} />
    </C.Container>
  );
};

export default App;