import React, { useState } from "react"
import { FaBars } from "react-icons/fa"
import Sidebar from "../Sidebar"
import * as C from "./styles"

const Header = () => {
  const [sidebar, setSideBar] = useState(true)

  const showSiderBar = () => setSideBar(!sidebar)

  return (
    <C.Container>
      <FaBars onClick={showSiderBar} />
      {sidebar && <Sidebar active={setSideBar} />}
    </C.Container>
  )
}

export default Header
