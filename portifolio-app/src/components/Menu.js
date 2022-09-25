import { Link } from 'react-router-dom';
import { MainMenu } from '../styles/MainMenu';

const Menu = () => {
    return (
        <>
            <MainMenu>
                <Link to="/"> Home </Link>
                <Link to="/Projetos"> Projetos </Link>
                <Link to="/Contato"> Contato </Link>
            </MainMenu>
        </>
    )
};

export default Menu;