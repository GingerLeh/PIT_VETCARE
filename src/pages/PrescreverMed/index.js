import React from "react"
import { LayoutMain } from "../../Layout/Main"
import MainCard from "../../components/MainCard"
import ListaMedicamentos from "../../components/Lists/ListaMedicamentos"

const Home = () => {
  return (
    <LayoutMain>
        <MainCard titulo="Pacientes com Medicamentos Prescritos"><ListaMedicamentos></ListaMedicamentos></MainCard>
    </LayoutMain>
  )
}

export default Home
