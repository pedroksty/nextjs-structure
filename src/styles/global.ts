import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;

  }

  body {
    background: ${props => props.theme.colors.background};
    color: #e1e1e6;
    font: 400 16px Roboto, sans-serif;
  }
`
