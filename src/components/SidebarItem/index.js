import React from "react"
import { Container } from "./styles"
import {NavLink } from 'react-router-dom';

const SidebarItem = ({ Icon, Text, Link }) => {
  return (
    <Container>
      <Icon />
      <NavLink to={Link}>{Text}</NavLink>
    </Container>
  )
}

export default SidebarItem
