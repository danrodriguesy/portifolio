import styled from 'styled-components';

export const HeaderDiv = styled.div`
    background: #00213F;
    margin: 0;
    padding: 0;
    min-height: 10px;
    display: flex;
    justify-content: space-between;
    padding: 20px 60px;
    @media (max-width: 600px) {
        flex-direction: column;
        padding: 10px 10px;
        text-align: center;
    }
    span {
        color: #00A199;
        font-weight: bold;
        @media (max-width: 600px) {
            font-size: 15px;
        }
    }
`;