import React, { useEffect, useState } from "react";
import ColunasCobranca from "../../componentes/colunas-cobranca";
import "./escritorio.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ButtonIcon from "../../../../pax-associado/src/components/button-icon";
import ModalLateral from "../../componentes/modal-lateral";
import ButtonText from "../../../../pax-associado/src/components/button-texto/index";
import ModalClientes from "../../componentes/modal-clientes";
import BallotIcon from "@mui/icons-material/Ballot";
import Checkbox from "@mui/material/Checkbox";
import { useCRM } from "../../service/api";
import { toast } from "react-toastify";


const label = { inputProps: { "aria-label": "Checkbox demo" } };

const EscritorioCobranca = () => {
  const colunasDinamicas = {
    "1ª Parcela em atraso": [],
    "2ª Parcela em atraso": [],
    "3ª Parcela em atraso": [],
    "Pagou mas em Debito 1ª Parcela": [],
    "Pagou mas em Debito 2ª Parcela": [],
    "Pagou mas em Debito 3ª Parcela": [],
    "Em dia": [],
    Adiantados: [],
    Anuais: [],
  };
  const [colunaSelecionada, setColunaSelecionada] = useState(null);
  const [dadosPorColuna, setDadosPorColuna] = useState({});
  const mesAtual = new Date().getMonth() + 1;
  const anoAtual = new Date().getFullYear();
  const [modalAberta, setModalAberta] = useState(false); // Estado para a modal existente
  const [modalClientes, setModalClientes] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const { getCRMEsc } = useCRM();
  const navigate = useNavigate();

  const handleCloseFormulario = () => {
    navigate("/");
    localStorage.setItem("page-cobranca", "/");
  };

  const toggleModal = (coluna) => {
    setModalAberta(!modalAberta);
    setColunaSelecionada(coluna);
  };

  const toggleModalClientes = () => {
    setModalClientes(!modalClientes);
  };

  const handleCardClick = (cardData) => {
    setSelectedCardData(cardData);
    setModalClientes(true);
  };

  const handleCloseFormularioModal = () => {
    setModalClientes(false);
  };

  const construirColunasDinamicamente = (dadosClientes) => {
    const mesAtual = new Date().getMonth() + 1;
    const anoAtual = new Date().getFullYear();

    dadosClientes.forEach((cliente) => {
      const mesUltimoMesPago = parseInt(cliente.ultimo_mes_pago.split('/')[1]);
      const mesUltimoPagamento = parseInt(cliente.ultimo_pagamento.split('/')[1]);
      const anoUltimoMesPago = parseInt(cliente.ultimo_mes_pago.split('/')[2]);
      const anoUltimoPagamento = parseInt(cliente.ultimo_pagamento.split('/')[2]);

      if (mesUltimoMesPago === mesAtual && anoUltimoMesPago === anoAtual) {
        colunasDinamicas["Em dia"].push(cliente);
      } else if (mesUltimoMesPago < mesAtual && mesUltimoPagamento === mesAtual) {
        const diferencaAnos = anoAtual - anoUltimoMesPago;
        const diferencaMeses = (diferencaAnos * 12) + mesAtual - mesUltimoMesPago;
        colunasDinamicas[`Pagou mas em Debito ${diferencaMeses}ª Parcela`].push(cliente);
      } else if (mesUltimoMesPago < mesAtual && anoUltimoMesPago === anoAtual) {
        const diferencaAnos = anoAtual - anoUltimoMesPago;
        const diferencaMeses = (diferencaAnos * 12) + mesAtual - mesUltimoMesPago;
        colunasDinamicas[`${diferencaMeses}ª Parcela em atraso`].push(cliente);
      } else {
      }
    });

    return colunasDinamicas;
  };

  useEffect(() => {
    getCRMEsc().then((data) => {
      console.log(data)
      const colunas = construirColunasDinamicamente(data);
      setDadosPorColuna(colunas);
    }).catch((error) => {
      toast.error('Erro ao obter dados do CRM:' + error);
    });
  }, []);

  return (
    <div className="container-cobranca-escritorio">
      <div className="retorna-cobranca">
        <div className="button-retorn-cobran">
          <div className="button-retorn3">
            <ButtonIcon
              funcao={handleCloseFormulario}
              icon={<ArrowBackIosNewIcon fontSize={"small"} />}
            />
          </div>
        </div>
        <div className="crm-escritorio-container">
          <label>
            <BallotIcon fontSize={"small"} />
            CRM Escritório
          </label>
        </div>

        <div className="filtro-cobrancaca-escritorio">
          <div className="button-retorn2">
            {modalAberta && (
              <ModalLateral
                isOpen={modalAberta}
                toggleModal={toggleModal}
                colunaSelecionada={colunaSelecionada}
                conteudo={
                  <div className="container-modal-lateral">
                    <h1>Filtro para {colunaSelecionada}</h1>
                    <div className="campos-filtro">
                      <div className="filtro-data-cobran">
                        <label>Data Contrato</label>
                        <input type="date"></input>
                      </div>
                    </div>
                    <div className="campos-filtro">
                      <div className="campos-01-cobranca">
                        <label>Nome</label>
                        <input placeholder="Informe o Nome"></input>
                      </div>
                      <div className="indicacoes-cliente-cobran">
                        <label>Dia Pagamento</label>
                        <input type="number"></input>
                      </div>
                    </div>
                    <div className="campos-filtro">
                      <div className="indicacoes-cliente-cobran">
                        <label>Ultimo Mês Pago</label>
                        <input type="date"></input>
                      </div>
                      <div className="indicacoes-cliente-cobran">
                        <label>Ultimo Pagamento</label>
                        <input type="date"></input>
                      </div>
                    </div>
                    <div className="campos-filtro">
                      <label>Mais Filtros:</label>
                    </div>
                    <div className="campos-filtro">
                      <div>
                        <label>Rota:</label>
                        <select>
                          <option value={null}>Todos</option>
                          <option value={1}>ROTA ESC. TOSHI</option>
                          <option value={2}>ROTA ESC. MARCELINO</option>
                          <option value={3}>Rota A</option>
                        </select>
                      </div>
                    </div>
                    <div className="pesquisa-filtro-cobran">
                      <ButtonText title="PESQUISAR" />
                    </div>
                  </div>
                }
              ></ModalLateral>
            )}
          </div>
        </div>
      </div>
      <div className="informacoes-cont-cobr">
        {Object.entries(dadosPorColuna).map(([titulo, dados], index) => (
          <ColunasCobranca
            key={index}
            titulo={titulo}
            dados={dados}
            numeros={dados.length}
            onCardClick={handleCardClick} // Passando a função de callback
            onFilterIconClick={(coluna) => toggleModal(coluna)}
          />
        ))}

        {modalClientes && selectedCardData && (
          <ModalClientes
            open={modalClientes}
            onClose={handleCloseFormularioModal}
            clienteData={selectedCardData}
          />
        )}
      </div>
    </div>
  );
};

export default EscritorioCobranca;
