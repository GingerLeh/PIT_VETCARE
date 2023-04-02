import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars, faBox, faFeatherAlt, faFileAlt, faHome, faIdCardAlt, faSyringe, faUser, faUserAlt
} from "@fortawesome/free-solid-svg-icons";

import style from "./Style.module.css"
import Logo from "./../Logo"
import { useState } from "react";
import { LogoMin } from "../../LogoMin";

const Sidebar = ({ active }) => {
  const [status, setStatus] = useState(true)

  const closeSidebar = () => {
    setStatus(status ? false : true)
    console.log(status)
  }


  return (
    <header className={style.header} data-status={status}>
      <div className={style.contentLogo}>{status ? <Logo /> : <div className={style.contentIcon}><LogoMin /></div>}</div>
      <div onClick={closeSidebar}>
        <Item iconName={faBars} status={status}>Menu</Item>
      </div>
      <div className={style.container}>
        <Item href="/home" iconName={faHome} status={status}>Início</Item>
        <Item href="/usuarios" iconName={faUser} status={status}>Usuários</Item>
        <Item href="/clientes" iconName={faUserAlt} status={status}>Clientes</Item>
        <Item href="/pets" iconName={faFeatherAlt} status={status}>Pets</Item>
        <Item href="/produtos" iconName={faBox} status={status}>Produtos</Item>
        <Item href="/servicos" iconName={faIdCardAlt} status={status}>Serviços</Item>
        <Item href="/prescrever" iconName={faSyringe} status={status}>Prescrever Medicamentos</Item>
        <Item href="/relatorios" iconName={faFileAlt} status={status}>Relatórios</Item>
      </div>
    </header>
    // <Container sidebar={active}>
    //   <FaTimes onClick={closeSidebar} />
    //   <Content>
    //     <SidebarItem Icon={FaHome} Text="Início" Link={'/home'}/>
    //     <SidebarItem Icon={FaUserAlt} Text="Clientes" Link={'/clientes'} />
    //     <SidebarItem Icon={FaFeatherAlt} Text="Pets" />
    //     <SidebarItem Icon={FaRegCalendarAlt} Text="Agendamento" />
    //     <SidebarItem Icon={FaIdCardAlt} Text="Serviços" />
    //     <SidebarItem Icon={FaSyringe} Text="Prescrever Medicamentos" />
    //     <SidebarItem Icon={FaFileAlt} Text="Relatórios" />
    //     <SidebarItem Icon={FaTimes} Text="Sair" />
    //   </Content>
    // </Container>
  )
}

export default Sidebar

const Item = ({ href, children, status, iconName }) => {
  return (
    <a className={`${style.item}`} data-status={status} href={href} >
      <div className={style.contentIcon}>
        <FontAwesomeIcon className={style.icon} icon={iconName} alt="" />
      </div>
      {status === true ? children : null}</a>
  )
}
