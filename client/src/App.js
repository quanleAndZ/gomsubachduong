import React from "react";

import { Header, Footer } from "components/layout";
import styled from "styled-components";
import Routes from "routes";

function App() {
  return (
    <AppWarraper className="container">
      <Header />
      <Routes />
      <Footer />
    </AppWarraper>
  );
}

const AppWarraper = styled.div`
  background-color: #eee;
  padding: 0;
`;

export default App;
