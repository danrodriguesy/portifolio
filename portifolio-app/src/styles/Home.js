import styled from 'styled-components';

export const HomeStyle = styled.div`
    #main {
        display: flex;
    }
    #home-left {
        min-height: 600px;
        width: 50%;
        background: #00213F;
        justify-content: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #00A199;

        img {
            width: 120px;
            height: 140px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid #00A199;
        }

        p {
            margin-bottom: 50px;
        }
        
        i {
            font-size: 30px;
            margin: 0 20px;
            color: #00A199;
            cursor: pointer;
            border: 1px solid #00A199;
            padding: 20px;
            border-radius: 20px;
        }
    }
    #home-right {
        min-height: 600px;
        width: 50%;
        background: #393939;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    
        button {
            background: none;
            cursor: pointer;
            border: 1px solid #fff;
            padding: 20px;
            color: #fff;
            font-size: 15px;
            margin-bottom: 40px;
        }
        button:hover {
            background: #00A199;
        }
        i {
            font-size: 40px;
            margin: 0 20px;
        }
    }
`;