import styled from 'styled-components'
import { shade } from 'polished'

import cyberpunkBackground from '../../../assets/cyberpunk_backgournd.jpg'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;

  img {
    max-width: 400px;
    width: 100%;
  }

  div {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    input {
      font-size: 20px;
      padding: 6px 12px;
      border: 0;
      border-radius: 4px;
      margin-top: 15px;
    }

    button {
      margin-top: 24px;
      padding: 6px 12px;
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.primary};
      border-radius: 4px;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
      font-size: 26px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color ease-in 200ms, border-color ease-in 200ms;

      &:hover {
        border-color: ${shade(0.23, '#fc0404')};
        background-color: ${shade(0.23, '#fc0404')};
      }
    }
  }

  @media screen and (max-width: 1220px) {
  }
`

export const StyledLink = styled.p`
  margin: 10px auto 0;
  text-decoration: none;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${cyberpunkBackground});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1220px) {
    padding: 0 40px;
  }
`
