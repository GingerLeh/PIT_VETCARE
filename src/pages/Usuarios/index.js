import React from "react"
import { LayoutMain } from "../../Layout/Main"
import MainCard from "../../components/MainCard"
import ListaUsuarios from "../../components/Lists/ListaUsuarios"

const Home = () => {
  return (
    <LayoutMain>
        <MainCard titulo="Lista de Usuários"><ListaUsuarios></ListaUsuarios></MainCard>
    </LayoutMain>
  )
}

export default Home
