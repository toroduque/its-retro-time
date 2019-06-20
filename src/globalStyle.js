import { createGlobalStyle } from 'styled-components'
import { PRIMARY } from './constants/colors'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap');

    /* Set rem base to 10px */
    html { 
        font-size: 62.5%;
    } 

    body { 
        margin: 0;
        font-family: 'Raleway', Arial, Helvetica, sans-serif;
        font-size: 1.4rem;
    }

    button, input, textarea {
        font-family: 'Raleway', Arial, Helvetica, sans-serif;
        font-size: 1.4rem;
        box-sizing: border-box;
    }

    h1 {
        color: ${PRIMARY};
        letter-spacing: -0.09rem;
        font-size: 2.4rem;
    }

    a {
        text-decoration: none;
    }
`
export default GlobalStyle