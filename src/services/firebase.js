// Importa a biblioteca Firebase compatível com a versão 8 do Firebase (Firebase v8)
import firebase from "firebase/compat/app";

// Importa os módulos de autenticação e firestore do Firebase compatível com a versão 8
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Configuração do Firebase com as credenciais do projeto
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMÍNIO_AUTH",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID",
};

// Inicializa o aplicativo Firebase com a configuração fornecida
const app = firebase.initializeApp(firebaseConfig);

// Cria uma instância do Firestore para interagir com o banco de dados Firestore
const db = app.firestore();

// Cria uma instância de autenticação para lidar com a autenticação de usuários
const auth = app.auth();

// Cria uma instância do provedor de autenticação do Google para autenticação com o Google
const provider = new firebase.auth.GoogleAuthProvider();

// Exporta as instâncias do Firestore, autenticação e provedor para uso em outros módulos
export { db, auth, provider };
