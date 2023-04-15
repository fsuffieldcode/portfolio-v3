import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    html {
        --almostblack: #434343;
        --darkgrey: #6e6e6e;
        --midgrey: #8a8a8a;
        --lightgrey: #bfbfbf;
        --coral: #f68084;
        --grape: #827191;
        --lightblue: #a6c0fe;
        --wine: #cf4d6f;

        scroll-behavior: smooth;

        height: 100vh;
        overflow: auto;
        color: var(--almostblack);
        background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
        min-height: 100vh;
        background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);

        @media only screen and (max-device-width: 480px) {
            html {
                height: calc(100% + 60px);
                min-height: calc(100% + 60px);
            }   
}
    }
    
    body {
        height: 100vh;
        overflow: auto;
        font-family: 'Muli', sans-serif;
        box-sizing: border-box;
    }

    a {
        color: var(--darkgrey);
        &:hover {
            color: var(--coral);

        }
    }

`

export { GlobalStyle }
