import React from "react";

import TestLogo from '../../images/react-movie-logo.svg'
import TMBDLogo from  '../../images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header  = () => (
    <Wrapper>
        <Content>
            <LogoImg src={TestLogo} alt='logo' />
            <TMDBLogoImg src={TMBDLogo} alt='tmdb-logo'/>
        </Content>
    </Wrapper>
    
);

export default Header;