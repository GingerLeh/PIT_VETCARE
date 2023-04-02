import { createContext, useEffect, useState } from "react"

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    const userToken = localStorage.getItem("user_token")
    const userStorage = localStorage.getItem("users_db")

    if (userToken && userStorage) {
      const hasUser = JSON.parse(userStorage)?.filter(
        (user) => user.usuario === JSON.parse(userToken).usuario
      )

      if (hasUser) setUser(hasUser[0])
    }
  }, [])

  const signin = (users, password) => {
    const userStorage = JSON.parse(localStorage.getItem("users_db"))

    const hasUser = userStorage?.filter((user) => user.users === users)

    if (hasUser?.length) {
      if (hasUser[0].users === users && hasUser[0].password === password) {
        const token = Math.random().toString(36).substring(2)
        localStorage.setItem("user_token", JSON.stringify({ users, token }))
        setUser({ users, password })
        return
      } else {
        return "Usuário ou senha incorretos"
      }
    } else {
      return "Usuário não cadastrado"
    }
  }

  const signup = (users, password) => {
    const userStorage = JSON.parse(localStorage.getItem("users_db"))

    const hasUser = userStorage?.filter((user) => user.users === users)

    if (hasUser?.length) {
      return "Usuário já cadastrado"
    }

    let newUser

    if (userStorage) {
      newUser = [...userStorage, { users, password }]
    } else {
      newUser = [{ users, password }]
    }

    localStorage.setItem("users_db", JSON.stringify(newUser))
  }

  const signout = () => {
    setUser(null)
    localStorage.removeItem("user_token")
  }

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
