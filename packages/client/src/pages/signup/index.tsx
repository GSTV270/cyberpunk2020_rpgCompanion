import React, { useState, FormEvent, useCallback } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { useToast } from '../../hooks/toast'
import cyberpunkLogo from '../../assets/cyberpunk2020.png'
import { Container, Form, StyledLink } from '../../styles/pages/signin'

const Signup: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const { addToast } = useToast()

  const handleSignUp = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      console.log(username)
      console.log(password)
      console.log(passwordConfirmation)

      if (!username) {
        return addToast({ type: 'error', title: 'Please enter your username!' })
      }
      if (!password) {
        return addToast({ type: 'error', title: 'Please enter your password!' })
      }
      if (!passwordConfirmation) {
        return addToast({
          type: 'error',
          title: 'Please confirm your password!'
        })
      }
      if (passwordConfirmation !== password) {
        return addToast({
          type: 'error',
          title: 'Password and Password confirmation must match!'
        })
      }

      return addToast({ type: 'success', title: 'Welcome to Cyberpunk 2020' })
    },
    [username, password, passwordConfirmation]
  )

  return (
    <Container>
      <Head>
        <title>Cyber Companion</title>
      </Head>

      <Form onSubmit={handleSignUp}>
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
          <input
            type="password"
            placeholder="Confirm your password"
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
          />
          <button type="submit">Sign up</button>
        </div>
        <Link href="/signin">
          <StyledLink>Back to log in</StyledLink>
        </Link>
      </Form>
    </Container>
  )
}

export default Signup
