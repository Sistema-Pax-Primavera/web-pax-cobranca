import React from "react";
import "./colunas-cobranca.css";
import CardsCobranca from "../cards-cobranca";

const ColunasCobranca = ({ titulo, dados }) => {
  const contador = dados.length;

  return (
    <div className="continaer-colunas-cobr">
      <div className="title-filtro-info">
        <label>{titulo}</label>
        <p>{contador}</p>
      </div>
      {dados.map((item, index) => (
        <CardsCobranca key={index} {...item} />
      ))}
    </div>
  );
};

export default ColunasCobranca;
