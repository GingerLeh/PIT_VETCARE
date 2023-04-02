import React from "react"
import GlobalStyle from "./styles/global"
import RoutesApp from "./routes"
import { AuthProvider } from "./contexts/auth"
import Logo from "./img/VetCare.png"
import './styles/global.css'
//import CadastroCliente from "./components/Clientes"

const App = () => {
  return (
    <AuthProvider>    
      <RoutesApp />
      <GlobalStyle />
    </AuthProvider>
  )
}

export default App
