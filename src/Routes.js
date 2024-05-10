import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cobranca from "./pages/cobranca";
import EscritorioCobranca from "./pages/escritorio-cobranca";
import Envios from './pages/envios/index'
import MovimentacaoDiaria from "./pages/moventacao-diaria";
import SolicitacoesCobradores from "./pages/solicitacoes-cobradores";
import Rotas from "./pages/rotas";
import Gerencial from "./pages/gerencial";
import Boleto from "./pages/boleto";
import Cobrador from "./pages/cobrador";
import Avulso from "./pages/gerador-boletos/avulso";
import Balao from "./pages/gerador-boletos/balao";
import Lote from "./pages/gerador-boletos/lote";
import BuscaBoletos from "./pages/gerador-boletos/busca-boletos";
import AgendamentosCobradores from "./pages/agendamento-cobradores";

const RoutesApp = () => (
    <BrowserRouter basename="pax-primavera/cobranca">
        <Routes>
            <Route exact path="/" element={<Cobranca />} />
            <Route exact path="/escritorio" element={<EscritorioCobranca />} />
            <Route exact path="/boleto" element={<Boleto />} />
            <Route exact path="/cobrador" element={<Cobrador />} />
            <Route exact path="/envios" element={<Envios />} />
            <Route exact path="/movimentacao-diaria" element={<MovimentacaoDiaria />} />
            <Route exact path="/solicitacoes-cobradores" element={<SolicitacoesCobradores />} />
            <Route exact path="/rotas" element={<Rotas />} />
            <Route exact path="/gerencial" element={<Gerencial />} />
            <Route exact path="/agendamento-cobradores" element={<AgendamentosCobradores />} />

            <Route exact path="/gerador-boletos/avulso" element={<Avulso />} />
            <Route exact path="/gerador-boletos/balao" element={<Balao />} />
            <Route exact path="/gerador-boletos/lote" element={<Lote />} />
            <Route exact path="/gerador-boletos/busca-boletos" element={<BuscaBoletos />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;