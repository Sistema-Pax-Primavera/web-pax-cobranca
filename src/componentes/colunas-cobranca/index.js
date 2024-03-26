import React from "react";
import "./colunas-cobranca.css";
import CardsCobranca from "../cards-cobranca";
import ModalClientes from "../modal-clientes";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const ColunasCobranca = ({ titulo, dados, numeros, onCardClick, onFilterIconClick }) => {
  const handleClickCard = (cardData) => {
    onCardClick(cardData);
  };

  return (
    <div className="continaer-colunas-cobr">
      <div className="title-filtro-info">
        <label>{titulo}</label>
        <FilterAltIcon fontSize={"small"} onClick={() => onFilterIconClick(titulo)} />
        <p>{numeros}</p>
      </div>
      {dados.map((item, index) => (
        <div key={index} onClick={() => handleClickCard(item)}>
          <CardsCobranca item={item} onClick={onCardClick} />
        </div>
      ))}
    </div>
  );
};

export default ColunasCobranca;
