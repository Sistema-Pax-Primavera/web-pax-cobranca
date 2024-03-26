import React, { useState } from "react";
import "./solicitacoes-cobradores.css";
import HeaderCobranca from "../../componentes/header-cobranca";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import CardsSolicitacoesCobradores from "../../componentes/cards-solicitacoes-cobradores";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const SolicitacoesCobradores = () => {
  const [solicitacoesPendentes, setSolicitacoesPendentes] = useState([
    {
      id: 1,
      mostraBotoes: true,
      conteudo: <CardsSolicitacoesCobradores />,
    },
    {
      id: 2,
      mostraBotoes: true,
      conteudo: <CardsSolicitacoesCobradores />,
    },
    // Adicione mais cards se necessário
  ]);
  const [solicitacoesEmAtendimento, setSolicitacoesEmAtendimento] = useState(
    []
  );

  const handleAceitar = (id) => {
    const cardAceito = solicitacoesPendentes.find((card) => card.id === id);
    if (cardAceito) {
      setSolicitacoesEmAtendimento([...solicitacoesEmAtendimento, cardAceito]);
      setSolicitacoesPendentes(
        solicitacoesPendentes.filter((card) => card.id !== id)
      );
    }
  };

  const handleRejeitar = (id) => {
    setSolicitacoesPendentes(
      solicitacoesPendentes.filter((card) => card.id !== id)
    );
  };

  // Função para definir o status como "Aguardando sincronização"
  const handleAguardandoSincronizacao = (id) => {
    setSolicitacoesEmAtendimento(
      solicitacoesEmAtendimento.map((card) =>
        card.id === id ? { ...card, status: "aguardandoSincronizacao" } : card
      )
    );
  };

  return (
    <div className="container-cobranca">
      <HeaderCobranca />
      <div className="container-soli-cobradores">
        <div className="solicitacoes-cobradores01">
          <label>
            <SpeakerNotesIcon fontSize={"small"} /> Solicitações
          </label>
          {/* Renderiza os cards pendentes */}
          {solicitacoesPendentes.map((solicitacao) => (
            <div key={solicitacao.id}>
              <CardsSolicitacoesCobradores
                mostraBotoes={solicitacao.mostraBotoes}
                onAceitar={() => handleAceitar(solicitacao.id)}
                onRejeitar={() => handleRejeitar(solicitacao.id)}
              />
            </div>
          ))}
        </div>

        <div className="solicitacoes-cobradores02">
          <label>
            <AccessTimeOutlinedIcon fontSize={"small"} /> Em Atendimento
          </label>
          {/* Renderiza os cards em atendimento */}
          {solicitacoesEmAtendimento.map((solicitacao) => (
            <div key={solicitacao.id}>
              <CardsSolicitacoesCobradores
                mostraBotoes={false} // Não mostra os botões nesta coluna
                onAguardandoSincronizacao={() =>
                  handleAguardandoSincronizacao(solicitacao.id)
                } // Passa a função para o componente
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolicitacoesCobradores;
