import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cobranca from "./pages/cobranca";
import EscritorioCobranca from "./pages/escritorio-cobranca";

const RoutesApp = () => (
    <BrowserRouter basename="pax-primavera/cobranca">
        <Routes>
            {/* <Route exact path="pax-primavera/cobranca" element={<Cobranca />} />*/}
            <Route exact path="/" element={<Cobranca />} />
            <Route exact path="/escritorio" element={<EscritorioCobranca />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;