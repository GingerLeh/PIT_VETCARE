import React from "react"
import { LayoutMain } from "../../Layout/Main"
import MainCard from "../../components/MainCard"
import ListaRelatorio from "../../components/Lists/ListaRelatorio"

const Home = () => {
  return (
    <LayoutMain>
        <MainCard titulo="Relatórios"><ListaRelatorio></ListaRelatorio></MainCard>
    </LayoutMain>
  )
}

export default Home
