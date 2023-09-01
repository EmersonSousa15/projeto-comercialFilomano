import { createGlobalStyle } from "styled-components";
import { theme } from "../assets/theme";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial;
    }

    html, body {
        scroll-behavior: smooth;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
    }

`;

export default GlobalStyle;