import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cobranca from "./pages/cobranca";
import EscritorioCobranca from "./pages/escritorio-cobranca";
import Envios from './pages/envios/index'
import MovimentacaoDiaria from "./pages/moventacao-diaria";

const RoutesApp = () => (
    <BrowserRouter basename="pax-primavera/cobranca">
        <Routes>
            {/* <Route exact path="pax-primavera/cobranca" element={<Cobranca />} />*/}
            <Route exact path="/" element={<Cobranca />} />
            <Route exact path="/escritorio" element={<EscritorioCobranca />} />
            <Route exact path="/envios" element={<Envios />} />
            <Route exact path="/movimentacao-diaria" element={<MovimentacaoDiaria />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;