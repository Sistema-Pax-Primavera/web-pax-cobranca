import React from "react";
import "./colunas-cobranca.css";
import CardsCobranca from "../cards-cobranca";
import ModalClientes from "../modal-clientes";

const ColunasCobranca = ({ titulo, dados, numeros, onCardClick  }) => {
  const handleClickCard = (cardData) => {
    onCardClick(cardData);
  };

  return (
    <div className="continaer-colunas-cobr">
      <div className="title-filtro-info">
        <label>{titulo}</label>
        <p>{numeros}</p>
      </div>
      {dados.map((item, index) => (
        <div key={index} onClick={() => handleClickCard(item)}>
          <CardsCobranca {...item} />
        </div>
      ))}
    </div>
  );
};

export default ColunasCobranca;
