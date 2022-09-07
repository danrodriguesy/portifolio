import React from 'react';
import { HeaderDiv } from '../styles/Header';
import Menu from '../components/Menu';
import { Code } from "phosphor-react";

const Header = () => {
    return (
        <HeaderDiv>
            <span>
                DANRLEY RODRIGUES
                <Code size={18} color="#00A199" weight="bold" />
            </span>
            <Menu />
        </HeaderDiv>
    )
}
export default Header;