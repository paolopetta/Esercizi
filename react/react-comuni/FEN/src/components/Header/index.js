import React from "react";

import TestLogo from "../../images/logo-finanza-esteso.png";
import TMBDLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={TestLogo} alt="logo" />
    </Content>
  </Wrapper>
);

export default Header;
