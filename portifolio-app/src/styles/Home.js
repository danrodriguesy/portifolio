import styled from 'styled-components';

export const HomeStyle = styled.div`
    background: #00213F;
    min-height: 200px;
    margin: 3rem auto;
    display: flex;
    padding: 20px 60px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    span {
        color: #00A199;
        text-align: center;
        font-size: 35px;
    }

    p {
        color: #00A199;
        font-size: 15px;
    }

    i {
        color: #00A199;
        margin: 10px 5px; 
        cursor: pointer;
    }

    img {
        clip-path: circle();
        width: 15%;
        margin: 0 4rem;
    }
`;