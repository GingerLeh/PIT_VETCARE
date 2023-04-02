import React from "react"
import { LayoutMain } from "../../Layout/Main"
import MainCard from "../../components/MainCard"
import ListaServicos from "../../components/Lists/ListaServicos"

const Home = () => {
  return (
    <LayoutMain>
        <MainCard titulo="Lista de Serviços"><ListaServicos></ListaServicos></MainCard>
    </LayoutMain>
  )
}

export default Home
