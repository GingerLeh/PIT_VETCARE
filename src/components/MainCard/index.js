import React from 'react'
import style from './Style.module.css'

const MainCard = ({titulo,children}) => {
  return (
    <div className={style.mainCard}>{titulo ? <h1>{titulo}</h1> : null}{children}</div>
  )
}
export default MainCard