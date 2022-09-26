import { HeaderDiv } from '../styles/Header';
import Menu from '../components/Menu';
import MenuMobile from '../components/MenuMobile';
import { List } from 'phosphor-react';
import { useState } from 'react';
import { MobileView, isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';


const Header = () => {
    const [showMenuMobile, SetshowMenumobile] = useState(false);

    let menu;
    if(showMenuMobile && isMobile){
        menu = true;
    }
    
    return (
        <>
            <HeaderDiv>
                <div>
                    <Link to="/Projetos"> 
                        <span>
                            DANRLEY RODRIGUES
                        </span>
                    </Link>
                </div>
                <div>
                    <List size={36} color="#FFF" weight="bold" onClick={() => SetshowMenumobile(!showMenuMobile)} />
                </div>
                <Menu />
            </HeaderDiv>
            <MobileView>
                { menu ? (
                    <MenuMobile />
                ) : ('')}
            </MobileView>
        </>
    )
}
export default Header;