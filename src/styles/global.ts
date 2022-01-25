import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    :root {
        --silver: #F7F7F7;
        
        --orange: #F89A33;
        --orange-light: #FFAF35;

        --yellow: #FFd335;

        --black: #000000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--silver);
    }

    body, input, button {
        font-family: Helvetica, Arial, Verdana, Geneva, Sans-Serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
    }
`;