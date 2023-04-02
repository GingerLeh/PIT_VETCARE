import React, { useState } from "react"
import * as C from "./styles"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const Signup = () => {
  const [users, setUsers] = useState("")
  const [senhaConf, setSenhaConf] = useState("")
  const [senha, setSenha] = useState("")
  const [error, setError] = useState("")

  const { signup } = useAuth()
  const navigate = useNavigate()

  const handleSignup = () => {
    if (!users | !senhaConf | !senha) {
      setError("Preencha todos os campos")
      return
    } else if (senha !== senhaConf) {
      setError("As senhas não são iguais")
      return
    }

    const res = signup(users, senha)

    if (res) {
      setError(res)
      return
    }

    alert("Usuário cadastrado com sucesso!")
    navigate("/")
  }

  return (
    <C.Container>
      <C.Content>
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
        <C.LabelInp>Senha</C.LabelInp>
        <Input
          type="password"
          placeholder="Confirme sua Senha"
          value={senhaConf}
          onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Cadastrar" onClick={handleSignup} />
        <C.LabelSignin>
          Usuário Cadastrado?
          <C.Strong>
            <Link to="/">&nbsp;Acessar</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  )
}

export default Signup
