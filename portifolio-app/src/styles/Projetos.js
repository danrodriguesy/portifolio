import styled from 'styled-components';

export const ProjectsStyle = styled.div`
    background-color: #333;
    min-height: 600px;

    #description {
        color: #00A199;
        font-size: 33px;
        display: flex;
        align-items: center;
        padding: 30px 0;

        #title {
            margin: 0px 0px;
        }
        
        hr.hr {
            width: 30%;
            border: 1px solid;
            padding: 0;
            height: 0;
        }
    }

    #cards {
        margin: 20px 50px;
        padding: 10px 50px;
        height: auto;
        display: flex;
        width: 84%;

        .card {
            width: 80%;
            height: 220px;
            border-radius: 5px;
            box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.16);
            margin: 0px 10px;

            img {
                max-width: 100%;
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
            }
            footer {
                padding: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                span {
                    color: #ccc;
                    font-size: 15px;
                }

                button {
                    padding: 10px;
                    border: 1px solid #FFF;
                    background: none;
                    color: #FFF;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                }
                a {
                    text-decoration: none;
                }
                span {
                    margin-right: 10px;
                }
                button:hover {
                    background: #00A199;
                    color: #FFF;
                    border: 1px solid #FFF;
                }
                button.linkConstruction {
                    background: red;
                    cursor: default;
                    border: 0px;
                }
            }
        }
    }

    #projectBlock {
        display: flex;
        justify-content: space-around;
    }
`;