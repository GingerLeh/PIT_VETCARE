import React from "react"
import * as C from "./styles"
import Relogio from "../../components/Relogio"
import Header from "../../components/Header"
import { LayoutMain } from "../../Layout/Main"

const Home = () => {
  return (
    <LayoutMain>
      
        <Relogio></Relogio>
      
    </LayoutMain>
  )
}

export default Home
