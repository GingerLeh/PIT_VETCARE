import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import style from "./Style.module.css" 


export const LayoutMain = ({children}) => {
  return (
    <div className={style.every}>
        <Sidebar/>
        <main className={style.main}>{children}</main>
    </div>
    
  )
}