import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cobranca from "./pages/cobranca";

const RoutesApp = () => (
    <BrowserRouter basename="pax-primavera/cobranca">
        <Routes>
            {/* <Route exact path="pax-primavera/cobranca" element={<Cobranca />} />*/}
            <Route exact path="/" element={<Cobranca />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;