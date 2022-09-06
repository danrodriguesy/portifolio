import React from 'react';

import Home from '../pages/Home';
import SobreMim from '../pages/SobreMim';
import {Routes, Route} from 'react-router-dom';

const Rotas = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/SobreMim" element={<SobreMim />} />
            <Route element={() => <div>ERRO 404! </div>} />
        </Routes>
    )
}
export default Rotas;