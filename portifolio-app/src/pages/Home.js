import React from "react";
import { Link } from 'react-router-dom';
import { HomeStyle } from '../styles/Home';

function Home() {
  return (
    <>
      <HomeStyle>
        <div id="main">
          <div id="home-left">
            <img src={require('../image/img-profile.png')} alt="imagem-perfil" />
            <h1>Danrley Rodrigues</h1>
            <p>Sou engenheiro de Software e apaixonando por música.</p>
            <div id="icones">
              <a href="https://github.com/danrodriguesy" target="_blank" rel="noopener noreferrer">
                <i className="devicon-github-original-wordmark colored"></i>
              </a>
              <a href="https://www.linkedin.com/in/danrley-rodrigues-b1623a64/" target="_blank" rel="noopener noreferrer">
                <i className="devicon-linkedin-plain colored"></i>
              </a>
            </div>
          </div>
          <div id="home-right">
            <Link to="/Projetos"> 
              <button>Projetos</button>
            </Link>
            <div id="icones">
              <i className="devicon-react-original-wordmark colored"></i> 
              <i className="devicon-css3-plain-wordmark colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-typescript-plain colored"></i>
              <i className="devicon-html5-plain-wordmark colored"></i>
              <i class="devicon-photoshop-line colored"></i>
            </div>
          </div>
        </div>
      </HomeStyle>
    </>
  )
}
export default Home;