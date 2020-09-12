import React from 'react'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import AppProvider from '../hooks/index'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
