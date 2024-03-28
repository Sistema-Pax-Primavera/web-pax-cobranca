import React from "react";
import "./gerencial.css";
import HeaderCobranca from "../../componentes/header-cobranca";
import CardsControladoras from "../../componentes/cards-controladoras";

const Gerencial = () => {
  return (
    <div className="container-cobranca">
      <HeaderCobranca />
      <div className="container-gerencial">
        <div className="container-controladoras">
          <CardsControladoras />
        </div>
      </div>
    </div>
  );
};

export default Gerencial;
