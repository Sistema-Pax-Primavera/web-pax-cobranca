import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cobranca from "./pages/cobranca";
import EscritorioCobranca from "./pages/escritorio-cobranca";
import Envios from './pages/envios/index'
import MovimentacaoDiaria from "./pages/moventacao-diaria";
import SolicitacoesCobradores from "./pages/solicitacoes-cobradores";
import Rotas from "./pages/rotas";

const RoutesApp = () => (
    <BrowserRouter basename="pax-primavera/cobranca">
        <Routes>
            {/* <Route exact path="pax-primavera/cobranca" element={<Cobranca />} />*/}
            <Route exact path="/" element={<Cobranca />} />
            <Route exact path="/escritorio" element={<EscritorioCobranca />} />
            <Route exact path="/envios" element={<Envios />} />
            <Route exact path="/movimentacao-diaria" element={<MovimentacaoDiaria />} />
            <Route exact path="/solicitacoes-cobradores" element={<SolicitacoesCobradores/>} />
            <Route exact path="/rotas" element={<Rotas />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;