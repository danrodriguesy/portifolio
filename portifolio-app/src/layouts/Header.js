import React from 'react';
import { HeaderDiv } from './Styles';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderDiv>
            <span>DANRLEY RODRIGUES</span>
            <Link to="/"> Home </Link>
            <Link to="/SobreMim"> SobreMim </Link>
            <Link to="/Projetos"> Projetos </Link>
        </HeaderDiv>
    )
}
export default Header;