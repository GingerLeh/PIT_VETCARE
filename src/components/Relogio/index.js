import React, { useState } from "react"
import * as C from "./styles"

function Relogio() {
  const [timer, setTimer] = useState(iniciarRelogio)

  function iniciarRelogio() {
    setInterval(function () {
      let date = new Date()

      let segundos = date.getSeconds()
      let minutos = date.getMinutes()
      let horas = date.getHours()

      setTimer(`${horas}:${minutos}:${segundos}`)
    }, 1000)
  }

  return (
    <C.Container>
      <div style={{ fontSize: "48px" }}>
        <span>{timer}</span>
      </div>
    </C.Container>
  )
}

export default Relogio
