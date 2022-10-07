import { Link } from 'react-router-dom';
import { MainMenu } from '../styles/MainMenu';

const Menu = () => {
    return (
        <>
            <MainMenu>
                <Link to="/"> Home </Link>
                <Link to=""> Projetos </Link>
            </MainMenu>
        </>
    )
};

export default Menu;