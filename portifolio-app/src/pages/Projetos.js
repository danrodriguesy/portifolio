import React from 'react';
import { ProjectsStyle } from '../styles/Projetos';
import { Eye } from 'phosphor-react';

const Projetos = () => {
    return (
        <ProjectsStyle>
            <div id="description">
                <hr className="hr" />
                    <div id="title">Projetos</div>
                <hr className="hr" />
            </div>
            <div id="cards">
                <div className="card">
                    <img src={require('../image/projeto-1.png')} alt="projeto1" />
                    <footer>
                        <span>ImpérioCCel</span>
                        <a href="https://imperioccel.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <button> <span>visitar</span>  <Eye size={15} color="#FFF" weight="bold" /> </button>
                        </a>
                    </footer>
                </div>
                <div className="card">
                    <img src={require('../image/projeto-2.png')} alt="projeto2" />
                    <footer>
                        <span>Projetos antigos (3 em 1)</span>
                        <a href="https://projetosantigos.vercel.app" target="_blank" rel="noopener noreferrer">
                            <button> <span>visitar</span>  <Eye size={15} color="#FFF" weight="bold" /></button>
                        </a>
                    </footer>
                </div>
                <div className="card">
                    <img src={require('../image/projeto-emConstrucao.png')} alt="projeto em construção" />
                    <footer>
                        <span>Em construção</span>
                        <button className="linkConstruction">em construção</button>
                    </footer>
                </div>
            </div>
        </ProjectsStyle>
    )
};

export default Projetos;
