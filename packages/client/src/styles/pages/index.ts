import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }

  button {
    margin-top: 24px;
    padding: 6px 12px;
    border: 0;
    border-color: ${({ theme }) => theme.colors.background};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    font-size: 32px;
    font-weight: bold;
    cursor: pointer;
    transition: color ease-in 200ms, border-color ease-in 200ms;

    &:hover {
      background-color: ${shade(0.23, '#fc0404')};
    }
  }

  @media screen and (max-width: 1220px) {
    padding: 0 40px;

    h1 {
      font-size: 41px;
    }

    p {
      font-size: 18px;
    }

    img {
      width: 100%;
    }
  }
`
