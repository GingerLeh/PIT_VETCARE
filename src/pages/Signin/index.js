import React, { useState } from "react"
import * as C from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const Signin = () => {
  const { signin } = useAuth()
  const navigate = useNavigate()

  const [users, setUsers] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (!users | !senha) {
      setError("Preencha todos os campos")
      return
    }

    const res = signin(users, senha)

    if (res) {
      setError(res)
      return
    }

    navigate("/home")
  }

  return (
    <C.Container>
      <C.Content>
        <C.Label>Login</C.Label>
        <C.LabelInp>Usuário</C.LabelInp>
        <Input
          type="users"
          placeholder="Digite o nome do Usuário"
          value={users}
          onChange={(e) => [setUsers(e.target.value), setError("")]}
        />
        <C.LabelInp>Senha</C.LabelInp>
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Acessar" onClick={handleLogin} />
        <C.LabelSignup>
          Cadastrar Usuário?
          <C.Strong>
            <Link to="/signup">&nbsp;Cadastrar</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  )
}

export default Signin
