import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect
} from 'react'
import api from '../services/api'

interface User {
  id: string
  name: string
  email: string
}

interface AuthState {
  token: string
  user: User
}

interface SingInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  user: User
  signIn(credentials: SingInCredentials): Promise<void>
  signOut(): void
  updateUser(user: User): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)

  useEffect(() => {
    const token = localStorage.getItem('@CP2020:token')
    const user = localStorage.getItem('@CP2020:user')

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      setData({ token, user: JSON.parse(user) })
    }
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password
    })

    const { token, user } = response.data

    localStorage.setItem('@CP2020:token', token)
    localStorage.setItem('@CP2020:user', JSON.stringify(user))

    api.defaults.headers.authorization = `Bearer ${token}`

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@CP2020:token')
    localStorage.removeItem('@CP2020:user')

    setData({} as AuthState)
  }, [])

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@CP2020:user', JSON.stringify(user))

      setData({
        token: data.token,
        user
      })
    },
    [data.token]
  )

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}
