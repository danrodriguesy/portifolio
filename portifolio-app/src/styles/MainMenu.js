import styled from 'styled-components';

export const MainMenu = styled.div`
    margin: 0 1rem;
    @media (max-width: 600px) {
        font-size: 12px;
        margin: 1rem auto;
        display: none;
    }
    a {
        text-decoration: none;
        margin: 0 1rem;
        color: #444;
        &:hover {
            color: #00A199;
        }
        &:active {
            background: none;
        }
        @media (max-width: 600px){
            margin: 0 10px;
            font-size: 12px;
        }
        &:active {
            background: none;
        }
    }
`;