import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

  body {
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`
