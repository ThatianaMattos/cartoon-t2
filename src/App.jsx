import React from "react";
import Header from "./componentes/Header/Header.jsx";
import Main from "./componentes/Main/Main.jsx";
import Programacao from "./componentes/Programacao/Programacao.jsx"; // Import Programacao
import Footer from "./componentes/Footer/Footer.jsx";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle` 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
`; // Adicionado ponto e vírgula aqui

function App() {
  // Import GlobalStyle component
  // Import Header, Main, and Footer components

  return (
    <>
      <GlobalStyle /> // Apply global styles
      <Header /> // Display header
      <Main /> // Display main content
      <Footer /> // Display footer
    </>
  )
}

export default App;
