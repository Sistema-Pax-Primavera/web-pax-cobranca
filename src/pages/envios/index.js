import React, { useState } from "react";
import "./envios.css";
import HeaderCobranca from "../../componentes/header-cobranca";
import FiltroTabelas1 from "../../componentes/filtro-tabelas";
import FiltroTabelas2 from "../../componentes/filtro-tabelas2";
import FiltroContrato from "../../componentes/filtro-contrato";

const Envios = () => {
  const [mostrarFiltroContrato, setMostrarFiltroContrato] = useState(false);
  const [mostrarFiltros, setMostrarFiltros] = useState(true);
  const [mostrarFiltroTabelas2, setMostrarFiltroTabelas2] = useState(false);

  const handleMostrarFiltro2 = () => {
    setMostrarFiltroTabelas2(true);
  };

  const handleOcultarFiltros = () => {
    setMostrarFiltroContrato(true);
    setMostrarFiltros(false);
  };

  return (
    <div className="container-cobranca">
      <HeaderCobranca />
      <div className="container-envios-padrao">
        {mostrarFiltros && (
          <>
            <FiltroTabelas1 onMostrarFiltro2={handleMostrarFiltro2} />
            {mostrarFiltroTabelas2 && <FiltroTabelas2 onOcultarFiltros={handleOcultarFiltros} />}
          </>
        )}
        {mostrarFiltroContrato && <FiltroContrato />}
      </div>
    </div>
  );
};

export default Envios;
