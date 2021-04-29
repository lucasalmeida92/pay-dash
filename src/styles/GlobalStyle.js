import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Niramit', sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.lightGrey1};
  }
`
