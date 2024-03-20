import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./header-cobranca.css";
import ArticleIcon from "@mui/icons-material/Article";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import TaskIcon from "@mui/icons-material/Task";

const HeaderCobranca = () => {
  const [activeRoute, setActiveRoute] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (route) => {
    // Navegar para a rota específica
    navigate(route);
    // Salvar a rota no localStorage
    localStorage.setItem("page-cobranca", route);
    // Atualizar a rota ativa
    setActiveRoute(route);
    // Selecionar automaticamente "Perfil" ao clicar em "Usuários"
    if (route === "/cobranca") {
      navigate("/cobranca/escritorio");
      setActiveRoute("/cobranca/escritorio");
    }
  };

  useEffect(() => {
    const savedPage = localStorage.getItem("page-cobranca");

    if (savedPage && savedPage !== location.pathname) {
      localStorage.removeItem("page-cobranca");
      setActiveRoute("");
    } else {
      setActiveRoute(savedPage);
    }
  }, [location.pathname]);

  return (
    <div className="container-header-cobranca">
      <button
        onClick={() => handleMenuClick("/escritorio")}
        className={
          activeRoute && activeRoute.startsWith("/escritorio") ? "active" : ""
        }
      >
        Escritório
      </button>
      <button
        onClick={() => handleMenuClick("/boleto")}
        className={
          activeRoute && activeRoute.startsWith("/boleto") ? "active" : ""
        }
      >
        Boleto
      </button>
      <button
        onClick={() => handleMenuClick("/cobrador")}
        className={
          activeRoute && activeRoute.startsWith("/cobrador") ? "active" : ""
        }
      >
        Cobrador
      </button>
      <button
        onClick={() => handleMenuClick("/movimentacao-diaria")}
        className={
          activeRoute && activeRoute.startsWith("/movimentacao-diaria")
            ? "active"
            : ""
        }
      >
        Mov. Diárias
      </button>
      <button
        onClick={() => handleMenuClick("/envios")}
        className={
          activeRoute && activeRoute.startsWith("/envios")
            ? "active"
            : ""
        }
      >
        Envios
      </button>
      <button
        onClick={() => handleMenuClick("/rotas")}
        className={
          activeRoute && activeRoute.startsWith("/rotas")
            ? "active"
            : ""
        }
      >
        Rotas
      </button>
      <button
        onClick={() => handleMenuClick("/gerencial")}
        className={
          activeRoute && activeRoute.startsWith("/gerencial")
            ? "active"
            : ""
        }
      >
        Gerencial
      </button>
    </div>
  );
};

export default HeaderCobranca;
