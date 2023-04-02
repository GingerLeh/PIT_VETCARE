import React from "react"
import * as C from "./styles"
import Header from "../../components/Header"
import ListaClientes from "../../components/Lists/ListaClientes"
import { LayoutMain } from "../../Layout/Main"
import MainCard from "../../components/MainCard"

const Home = () => {
  return (
    <LayoutMain>
        <MainCard titulo="Lista de Clientes"><ListaClientes></ListaClientes></MainCard>
    </LayoutMain>
  )
}

export default Home
