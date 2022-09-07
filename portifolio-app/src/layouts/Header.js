import React from 'react';
import { HeaderDiv } from '../styles/Header';
import Menu from '../components/Menu';

const Header = () => {
    return (
        <HeaderDiv>
            <div>
                <span>DANRLEY RODRIGUES</span>
            </div>
            <div>
                <Menu />
            </div>
        </HeaderDiv>
    )
}
export default Header;