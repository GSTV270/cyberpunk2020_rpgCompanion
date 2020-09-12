import React, { useCallback, useState, FormEvent } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import cyberpunkLogo from '../../assets/cyberpunk2020.png'
import { Container, Form, StyledLink } from '../../styles/pages/signin'
import { useToast } from 'src/hooks/toast'

const Signin: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { addToast } = useToast()

  const handleLogIn = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      console.log(username)
      console.log(password)

      if (!username) {
        return addToast({ type: 'error', title: 'Please enter your username' })
      }
      if (!password) {
        return addToast({ type: 'error', title: 'Please enter your password' })
      }

      return addToast({ type: 'success', title: 'Welcome to Cyberpunk 2020' })
    },
    [username, password]
  )

  return (
    <Container>
      <Head>
        <title>Cyber Companion</title>
      </Head>

      <Form onSubmit={handleLogIn}>
        <img src={cyberpunkLogo} alt="Cyberpunk2020 Image" />

        <div>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Log in</button>
        </div>

        <Link href="/signup">
          <StyledLink>Sign up</StyledLink>
        </Link>
      </Form>
    </Container>
  )
}

export default Signin
