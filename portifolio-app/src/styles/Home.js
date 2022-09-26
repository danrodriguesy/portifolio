import styled from 'styled-components';

export const HomeStyle = styled.div`
    #main {
        display: flex;
        
        @media (max-width: 600px){
            width: 100%;
            display: block;   
        }
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

        @media (max-width: 600px){
            width: 100%;
            font-size: 12px;
            text-align: center;
            min-height: 400px;
        }

        img {
            width: 140px;
            height: 160px;
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

            @media (max-width: 600px){
                font-size: 20px;
            }
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

        @media (max-width: 600px){
            width: 100%;
            min-height: 300px;
        }
    
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

            @media (max-width: 600px){
                font-size: 20px;
                margin: 0 15px;
            }
        }
    }
`;