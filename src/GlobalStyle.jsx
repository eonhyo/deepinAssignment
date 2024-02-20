import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        font-family: "Gaegu", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 19px;
        background-color: black;
        color: white
        

    }

    
`;

export default GlobalStyle;
