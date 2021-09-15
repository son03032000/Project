import React from "react";

import {
  HeaderStyled,
  LogoStyled,
  Nav,
  FunctionBtnStyled,
  SearchStyled,
  SearchBtnStyled,
  OutBtnStyled,
} from "./styles";

const Header = () => {
  return (
    <HeaderStyled>
      <LogoStyled>LOGO</LogoStyled>
      <Nav>
        <FunctionBtnStyled>1</FunctionBtnStyled>
        <FunctionBtnStyled>1</FunctionBtnStyled>
        <FunctionBtnStyled>1</FunctionBtnStyled>
      </Nav>
      <SearchStyled placeholder="Seacrh" />
      <SearchBtnStyled>Search</SearchBtnStyled>
      <OutBtnStyled>Log Out</OutBtnStyled>
    </HeaderStyled>
  );
};

export default Header;
