import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import cyberpunkLogo from '../assets/cyberpunk2020.png'
import { Container } from '../styles/pages'

const Access: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Cyber Companion</title>
      </Head>

      <img src={cyberpunkLogo} alt="Cyberpunk2020 Image" />
      <h1>Welcome to the future!</h1>
      <p>
        Are you ready for the best high-tech low-life experience of the future?
      </p>

      <Link href="/signin">
        <button type="button">Get in choombas!</button>
      </Link>
    </Container>
  )
}

export default Access
