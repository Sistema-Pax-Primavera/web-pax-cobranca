// Em CardsCobranca.js

import React from "react";
import "./cards-cobranca.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DateRangeIcon from "@mui/icons-material/DateRange";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const CardsCobranca = ({
  titleNome,
  numeroTelefone,
  titleIndicacao,
  titleResultado,
  data,
  onClick, // Adicione um prop para o evento de clique
}) => {
  return (
    <div className="container-cards-cobranca" onClick={onClick}>
      <div className="info-card-cobran">
        <AccountCircleIcon fontSize={"small"} />
        <label>{titleNome}</label>
      </div>
      <div className="info-card-cobran">
        <PhoneIcon fontSize={"small"} />
        <label>{numeroTelefone}</label>
      </div>
      <div className="info-card-cobran">
        <PersonIcon fontSize={"small"} />
        <label>{titleIndicacao}</label>
      </div>
      <div className="info-card-cobran">
        <AssessmentIcon fontSize={"small"} />
        <label>{titleResultado}</label>
      </div>
      <div className="info-card-cobran">
        <QueryBuilderIcon fontSize={"small"} />
        <label>{data}</label>
      </div>
    </div>
  );
};

export default CardsCobranca;
