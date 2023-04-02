import React from 'react'
import { LayoutMain } from "../../../Layout/Main"
import MainCard from '../../../components/MainCard'
import FormCadastroClientes from '../../../components/Forms/FormCadastroClientes'
const Criar = () => {
  return (
    <LayoutMain>
      <MainCard><FormCadastroClientes></FormCadastroClientes></MainCard>

    </LayoutMain>
    
  )
}

export default Criar