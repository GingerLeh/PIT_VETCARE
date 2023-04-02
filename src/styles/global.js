import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #525a43;
        font-family: Arial, Halvetica, sans-serif;
    }
`

export const ImgLoc = styled.img`
  position: "absolute";
  left: "50%";
  top: "14%";
  transform: "translate(-50%, -50%)";
`

export default GlobalStyle
