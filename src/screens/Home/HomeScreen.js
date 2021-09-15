import React from "react";

import Header from "../../components/HeaderComponent/Header";
import Footer from "../../components/FooterComponent/Footer";

import { Container, FooterStyled, BodyWrapStyled, Test } from "./styles";

const HomeScreen = () => {
  return (
    <Container>
      <Header />
      <BodyWrapStyled>
        <Test />
      </BodyWrapStyled>
      <Footer />
    </Container>
  );
};

export default HomeScreen;
