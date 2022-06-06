import React from "react";
import styled from "styled-components";

const Homescreen = () => {
  return (
    <Container>
      <Wrapper>Homescreen</Wrapper>
      <Mainscreen>
        <BuildMainScreen />
      </Mainscreen>
      <Sidescreen>
        <BuildSidescreen />
      </Sidescreen>
    </Container>
  );
};

export default Homescreen;
const SideScreen = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  height: 100%;
  background-color: lightgrey;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 1200;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;

  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
  }
`;

const Sidescreen = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Mainscreen = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    width: 90%;
  }
`;

const BuildMainScreen = styled.div``;

const BuildSidescreen = styled.div``;
