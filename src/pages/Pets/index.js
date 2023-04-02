import React from "react"
import { LayoutMain } from "../../Layout/Main"
import MainCard from "../../components/MainCard"
import ListaPets from "../../components/Lists/ListaPets"

const Home = () => {
  return (
    <LayoutMain>
        <MainCard titulo="Lista de Pets"><ListaPets></ListaPets></MainCard>
    </LayoutMain>
  )
}

export default Home
