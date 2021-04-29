import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  body {
    font-family: 'Sen', sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.lightGrey1};
  }

  * {
  font-family: 'Sen', sans-serif;
  }

  input {
    border: none;
    height: 44px;
    line-height: 40px;
    padding: 0 16px;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.lightGrey2};
    }
  }
`
