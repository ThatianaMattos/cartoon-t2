import React from "react";
import Header from "./componentes/Header/Header.jsx";
import Main from "./componentes/Main/Main.jsx";ent
import Programacao from "./componentes/Programacao/Programacao.jsx"
import Footer from "./componentes/Footer/Footer.jsx";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle` 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
`; // Added semicolon here

function App() {
  // Import GlobalStyle component
  // Import Header, Main, and Footer components

  return (
    <>
      <GlobalStyle /> {/* Apply global styles */}
      <Header /> {/* Display header */}
      <Main /> {/* Display main content */}
      <Programacao /> {/* Display programacao */}
      <Footer /> {/* Display footer */}
    </>
  )
}

export default App;