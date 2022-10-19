import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
  }

  body {
    min-width:375px;
    font-family: 'Noto Sans ', sans-serif;
    background: rgb(126,191,152)
}  
`;

export default GlobalStyle;
