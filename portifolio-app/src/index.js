import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './routes/Rotas';
import Header from './layouts/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  </>
  
);