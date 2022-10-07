import { Link } from 'react-router-dom';
import { MainMenuMobile } from '../styles/MainMenuMobile';

const MenuMobile = () => {
    return (
        <>
            <MainMenuMobile>
                <Link to="/"> Home </Link>
                <Link to=""> Projetos </Link>
            </MainMenuMobile>
        </>
    )
};

export default MenuMobile;