import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'SF Pro Display', sans-serif;                                        
        background: #2a2e35;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        background-color: transparent;
        padding: 1rem 2rem;
        border: 3px solid #30bee1;
        color: #fff;
        transition: all 0.25s linear;
        &:hover {
            background-color: #30bee1;
            color: #2a2e35;
        }
    }

    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }

    h3 {
        color: #fff;
    }

    h4 {
        font-weight: bold;
        font-size: 2rem;
    }

    span {
        color: #30bee1;
        font-weight: bold;
    }

    a {
        font-size: 1.1rem;
    }

    p {
        padding: 3rem 0;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
`;
export default GlobalStyles;
