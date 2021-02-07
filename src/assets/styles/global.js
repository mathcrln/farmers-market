import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    word-wrap: break-word;
  }
  
  body {
    font-size: 16px;
    font-family: Karla, sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding-bottom: 5rem;
    position:relative;
  }`
