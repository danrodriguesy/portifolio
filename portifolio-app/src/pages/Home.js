import React from "react";
import { HomeStyle } from '../styles/Home';
import img from '../image/img-profile.png';
import {} from 'phosphor-react';
import { PrimeIcons } from 'primereact/api';

function Home() {
  return (
    <>
      <HomeStyle>
        <img src={img} alt="img-profile"/>
        <h1>Desenvolvedor Front-end</h1>
        <p>Danrley Rodrigues</p>
        <div>

        </div>
      </HomeStyle>
    </>
  )
}
export default Home;