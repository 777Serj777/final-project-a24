import {createGlobalStyle} from "styled-components";
import {colors} from './variables'
 
const StyleGlobal = createGlobalStyle`
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
   
    }

    html {
        font-size: 0.625rem;
        height: 100%;
    }

    body{
        height: inherit;
        margin: 0 auto;
        font-family: 'Roboto', sans-serif;
        color: ${colors.textColor};
    }
    #root{
        height: inherit;
    }
    .App{
        height: inherit;
    }

`


export default StyleGlobal;