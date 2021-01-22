import { createGlobalStyle } from 'styled-components'
// import { default as Theme } from './theme'

export default createGlobalStyle`
  :root {
    /* Primary Colors */
    --primary-darker: ${props =>
      props.Theme.colors.primaryDarker};
    --primary-dark: ${props =>
      props.Theme.colors.primaryDark};
    --primary: ${props => props.Theme.colors.primary};
    --primary-light: ${props =>
      props.Theme.colors.primaryLight};
    --primary-lighter: ${props =>
      props.Theme.colors.primaryLighter};

    /* Secondary Colors */
    --secondary-darker: #54513E;
    --secondary-dark: #BEBBA8;
    --secondary: #E6E4DB;
    --secondary-light: #FEFCF3;
    --secondary-lighter: #FFFEFA;

   /* Text Colors */
   --text-darker: #011409;
    --text-dark: #2D3631;
    --text: #ababab;
    --text-light: #cdcdcd;
    --text-lighter: #F8FFFB;

    /* Box Shadow */
    --shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    --shadow-hover: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    /* Spacing */
    --xs: .5vmin;
    --sm: 1vmin;
    --md: 2vmin;
    --lg: 4vmin;
    --xl: 8vmin;
    --xxl: 16vmin;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
  }

  * {
    margin: 0;
  }

  img {
    border-radius: 1%;
  }

  .left {
    text-align: left;
  }

  .center {
    text-align: center;
  }

  .right {
    text-align: right;
  }

  html {
    box-sizing: border-box;
  }
`
