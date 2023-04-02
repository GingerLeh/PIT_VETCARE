import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Signin from "../pages/Signin"
import Signup from "../pages/Signup"
import useAuth from "../hooks/useAuth"
import Clientes from "../pages/Clientes"
import CriarClintes from "../pages/Clientes/Criar"
import Pets from "../pages/Pets"
import CriarPets from "../pages/Pets/Criar"
import Usuarios from "../pages/Usuarios"
import CriarUsuarios from "../pages/Usuarios/Criar"
import Produtos from "../pages/Produtos"
import CriarProdutos from "../pages/Produtos/Criar"
import Servicos from "../pages/Servicos"
import CriarServicos from "../pages/Servicos/Criar"
import CriarPrescrever from '../pages/PrescreverMed/Criar'
import Prescrever from "../pages/PrescreverMed"
import Relatorios from "../pages/Relatorios"



const Private = ({ Item }) => {
  const { signed } = useAuth()
  return signed > 0 ? <Item /> : <Signin />
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
          <Routes>
            <Route exact path="/home" element={<Private Item={Home} />} />
            <Route path="/" element={<Signin />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="*" element={<Signin />} />
            <Route path='/clientes' element={<Clientes></Clientes>}></Route>
            <Route path='/clientes/criar' element={<CriarClintes></CriarClintes>}></Route>
            <Route path='/pets' element={<Pets></Pets>}></Route>
            <Route path='/pets/criar' element={<CriarPets></CriarPets>}></Route>
            <Route path='/usuarios' element={<Usuarios></Usuarios>}></Route>
            <Route path='/usuarios/criar' element={<CriarUsuarios></CriarUsuarios>}></Route>
            <Route path='/produtos' element={<Produtos></Produtos>}></Route>
            <Route path='/produtos/criar' element={<CriarProdutos></CriarProdutos>}></Route>
            <Route path='/servicos' element={<Servicos></Servicos>}></Route>
            <Route path='/servicos/criar' element={<CriarServicos></CriarServicos>}></Route>
            <Route path='/prescrever' element={<Prescrever></Prescrever>}></Route>
            <Route path='/prescrever/criar' element={<CriarPrescrever></CriarPrescrever>}></Route>
            <Route path='/relatorios' element={<Relatorios></Relatorios>}></Route>











            
          </Routes>
        </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp
