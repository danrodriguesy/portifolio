import React from "react";
import { HomeStyle } from '../styles/Home';
import img from '../image/img-profile.png';
import {} from 'phosphor-react';
import 'primeicons/primeicons.css';

function Home() {
  return (
    <>
      <HomeStyle>
        <img src={img} alt="img-profile"/>
        <span>DANRLEY RODRIGUES</span>
        <p>Engenheiro de software e apaixonado por música.</p>
        <div>
          <i className="pi pi-github mr-2"></i>
          <i className="pi pi-linkedin mr-2"></i>
          <i className="pi pi-whatsapp mr-2"></i>
        </div>
      </HomeStyle>
    </>
  )
}
export default Home;