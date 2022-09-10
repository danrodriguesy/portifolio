import styled from 'styled-components';

export const MainMenuMobile = styled.div`
    display: grid;
    float: right;
    text-align: center;
    margin: 1rem 0;
    background: black;
    height: 100%;
    width: 100%;
    margin: 0 0;
    a {
        margin: 8px 5px;
        font-size: 13px;
        text-decoration: none;
        color: #FFF;
    }
    @media (mex-width: 600px){
        display: block;
    }
    @media (min-width: 600){
        display: none;
    }
`;