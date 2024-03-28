import React, { useState } from "react";
import "./envios.css";
import HeaderCobranca from "../../componentes/header-cobranca";
import FiltroTabelas1 from "../../componentes/filtro-tabelas";
import FiltroContrato from "../../componentes/filtro-contrato";

const Envios = () => {
  const [showFilterTabelas, setShowFilterTabelas] = useState(true);

  const toggleFiltros = () => {
    setShowFilterTabelas(!showFilterTabelas);
  };

  return (
    <div className="container-cobranca">
      <HeaderCobranca />
      <div className="container-envios-padrao">
      {showFilterTabelas ? (
        <FiltroTabelas1 toggleFiltros={toggleFiltros} />
      ) : (
        <FiltroContrato toggleFiltros={toggleFiltros} />
      )}
      </div>
    </div>
  );
};

export default Envios;
