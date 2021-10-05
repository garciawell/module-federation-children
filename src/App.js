import React from "react";
import ReactDOM from "react-dom";
import Footer from "./Footer";
import Header from "./Header";
import GlobalStyle from "./styles/Globalnject";

const App = () => (
  <div>
    <Header />
    <div>CONTEUDO</div>
    <Footer />
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));