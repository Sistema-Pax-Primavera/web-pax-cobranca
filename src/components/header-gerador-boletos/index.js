import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header-gerador-boletos.css";

const HeaderGeradorBoletos = () => {
  const [activeRoute, setActiveRoute] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (route) => {
    // Navegar para a rota específica
    navigate(route);
    // Salvar a rota no localStorage
    localStorage.setItem("page-gerador-boletos", route);
    // Atualizar a rota ativa
    setActiveRoute(route);
  };

  useEffect(() => {
    const savedPage = localStorage.getItem("page-gerador-boletos");

    if (savedPage && savedPage !== location.pathname) {
      localStorage.removeItem("page-gerador-boletos");
      setActiveRoute("");
    } else {
      setActiveRoute(savedPage);
    }
  }, [location.pathname]);

  return (
    <div className="container-header-cobranca">
      <label>Gerador Boletos</label>
      <button
        onClick={() => handleMenuClick("/gerador-boletos/avulso")}
        className={activeRoute === "/avulso" ? "active" : ""}
      >
        {" "}
        Avulso
      </button>
      <button
        onClick={() => handleMenuClick("/gerador-boletos/balao")}
        className={activeRoute === "/balao" ? "active" : ""}
      >
        Balão
      </button>
      <button
        onClick={() => handleMenuClick("/gerador-boletos/lote")}
        className={activeRoute === "/lote" ? "active" : ""}
      >
        Lote
      </button>

    </div>
  );
};

export default HeaderGeradorBoletos;
