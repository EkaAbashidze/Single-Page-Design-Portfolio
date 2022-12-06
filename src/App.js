import Marginals from "./components/Marginals";
import Card from "./components/Card";
import Grid from "./components/Grid";
import Person from "./components/Person";
import Slider from "./components/Slider";
import React from "react";
import Header from "./components/Header";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
        <Marginals />
      <Header/>
      <Grid />
      <Person />
      <Slider />

        <Card />
        <Marginals />

    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    @media screen and (min-width: 1440px) {
      display: block;
    }

`;
