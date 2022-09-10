import styled from 'styled-components';

export const HeaderDiv = styled.div`
    svg {
        display: none;
        @media (max-width: 600px){
            display: block;
        }
    }
    background: #00213F;
    margin: 0;
    padding: 0;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
    @media (max-width: 600px) {
        display: flex;
        padding: 10px;
    }
    span {
        color: #00A199;
        font-weight: bold;
        justify-items: center;
        display: flex;
        @media (max-width: 600px) {
            font-size: 15px;
            justify-content: center;
        }
        p {
            margin-right: 10px;
        }
    }
`;