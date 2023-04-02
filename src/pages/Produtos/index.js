import React from "react"
import { LayoutMain } from "../../Layout/Main"
import MainCard from "../../components/MainCard"
import ListaProdutos from "../../components/Lists/ListaProdutos"

const Home = () => {
  return (
    <LayoutMain>
        <MainCard titulo="Lista de Produtos"><ListaProdutos></ListaProdutos></MainCard>
    </LayoutMain>
  )
}

export default Home
