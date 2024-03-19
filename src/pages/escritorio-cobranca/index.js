import React, { useEffect, useState } from "react";
import ColunasCobranca from "../../componentes/colunas-cobranca";
import "./escritorio.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconeButtonTable from "../../../../pax-associado/src/components/button-icon-texto";
import { useNavigate } from "react-router-dom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ButtonIcon from "../../../../pax-associado/src/components/button-icon";
import ModalLateral from "../../componentes/modal-lateral";
import ButtonText from "../../../../pax-associado/src/components/button-texto/index";
import ModalClientes from "../../componentes/modal-clientes";
import BallotIcon from "@mui/icons-material/Ballot";
import Checkbox from "@mui/material/Checkbox";
import { useCRM } from "../../service/api";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const EscritorioCobranca = () => {
  const [modalAberta, setModalAberta] = useState(false); // Estado para a modal existente
  const [modalClientes, setModalClientes] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const { getCRMEsc, getCRMEsBusca } = useCRM();
  const navigate = useNavigate();

  const handleCloseFormulario = () => {
    navigate("/");
    localStorage.setItem("page-cobranca", "/");
  };

  const toggleModal = () => {
    setModalAberta(!modalAberta);
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

  const dadosPorColuna = {
    Indicados: [
      {
        titleNome: "Mateus Kronbauer Pitta",
        numeroTelefone: "(67) 99928-2807",
        titleIndicacao: "Jéssicas Souza",
        titleResultado: "Prospecção",
        data: "20/05/2023",
      },
      {
        titleNome: "Mateus Kronbauer Pitta",
        numeroTelefone: "(67) 99928-2807",
        titleIndicacao: "Jéssicas Souza",
        titleResultado: "Prospecção",
        data: "20/05/2023",
      },
      {
        titleNome: "Mateus Kronbauer Pitta",
        numeroTelefone: "(67) 99928-2807",
        titleIndicacao: "Jéssicas Souza",
        titleResultado: "Prospecção",
        data: "20/05/2023",
      },
      {
        titleNome: "Juliana Mendonça Oliveira",
        numeroTelefone: "(82) 98765-4321",
        titleIndicacao: "Lucas Silva",
        titleResultado: "Venda",
        data: "12/08/2023",
      },
      {
        titleNome: "Rodrigo Oliveira Santos",
        numeroTelefone: "(31) 99876-5432",
        titleIndicacao: "Fernanda Torres",
        titleResultado: "Prospecção",
        data: "05/06/2023",
      },
      {
        titleNome: "Carla Lima Ribeiro",
        numeroTelefone: "(55) 98765-6789",
        titleIndicacao: "Pedro Henrique",
        titleResultado: "Fechamento",
        data: "15/09/2023",
      },
      // Adicione mais dados conforme necessário para cada coluna
    ],
    "Tentativa de Contato": [
      {
        titleNome: "Lucas Almeida Pereira",
        numeroTelefone: "(84) 98765-1234",
        titleIndicacao: "Ana Carolina Oliveira",
        titleResultado: "Negociação",
        data: "25/07/2023",
      },
      {
        titleNome: "Rafael Oliveira Souza",
        numeroTelefone: "(47) 99928-8765",
        titleIndicacao: "Mariana Costa",
        titleResultado: "Prospecção",
        data: "18/04/2023",
      },
    ],
    "Oportunidade de Venda": [
      {
        titleNome: "Maria Costa Lima",
        numeroTelefone: "(21) 98765-2345",
        titleIndicacao: "Gabriel Oliveira",
        titleResultado: "Follow-up",
        data: "10/10/2023",
      },
      {
        titleNome: "Ana Santos Mendes",
        numeroTelefone: "(61) 99876-5432",
        titleIndicacao: "Juliana Mendonça",
        titleResultado: "Venda",
        data: "30/11/2023",
      },
      {
        titleNome: "Jéssica Souza Pereira",
        numeroTelefone: "(32) 98765-6789",
        titleIndicacao: "Rodrigo Oliveira",
        titleResultado: "Negociação",
        data: "08/06/2023",
      },
      {
        titleNome: "Fernanda Torres Oliveira",
        numeroTelefone: "(71) 99928-2345",
        titleIndicacao: "Lucas Almeida",
        titleResultado: "Prospecção",
        data: "14/03/2023",
      },
    ],
    "Aguardando Contrato": [
      {
        titleNome: "Gabriel Oliveira Lima",
        numeroTelefone: "(84) 98765-5432",
        titleIndicacao: "Maria Costa",
        titleResultado: "Venda",
        data: "01/07/2023",
      },
      {
        titleNome: "Carla Lima Pereira",
        numeroTelefone: "(31) 99876-9876",
        titleIndicacao: "Rafael Oliveira",
        titleResultado: "Follow-up",
        data: "19/10/2023",
      },
    ],
    "Venda Finalizada": [
      {
        titleNome: "Lucas Silva Barbosa",
        numeroTelefone: "(48) 98765-8765",
        titleIndicacao: "Ana Santos",
        titleResultado: "Negociação",
        data: "26/05/2023",
      },
      {
        titleNome: "Mariana Costa Oliveira",
        numeroTelefone: "(61) 98765-4321",
        titleIndicacao: "Jéssica Souza",
        titleResultado: "Fechamento",
        data: "09/08/2023",
      },
    ],
    Negados: [
      {
        titleNome: "Pedro Henrique Mendonça",
        numeroTelefone: "(33) 99928-9876",
        titleIndicacao: "Pedro Barbosa",
        titleResultado: "Venda",
        data: "04/12/2023",
      },
      {
        titleNome: "Ana Carolina Santos",
        numeroTelefone: "(35) 98765-4321",
        titleIndicacao: "Carla Lima",
        titleResultado: "Negociação",
        data: "17/06/2023",
      },
      {
        titleNome: "Rodrigo Oliveira Ribeiro",
        numeroTelefone: "(37) 99876-5432",
        titleIndicacao: "Lucas Silva",
        titleResultado: "Prospecção",
        data: "28/02/2023",
      },
      {
        titleNome: "Jéssica Souza Barbosa",
        numeroTelefone: "(84) 98765-2345",
        titleIndicacao: "Mariana Costa",
        titleResultado: "Follow-up",
        data: "11/11/2023",
      },
      {
        titleNome: "Juliana Mendonça Pereira",
        numeroTelefone: "(88) 99928-4321",
        titleIndicacao: "Rodrigo Oliveira",
        titleResultado: "Fechamento",
        data: "07/09/2023",
      },
    ],
    // Adicione dados para outras colunas conforme necessário
  };

  useEffect(() => {
    getCRMEsc().then((data) => {
      console.log(data)
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
            <ButtonIcon
              icon={<FilterAltIcon fontSize={"small"} />}
              funcao={toggleModal}
            />
            {modalAberta && (
              <ModalLateral
                isOpen={modalAberta}
                toggleModal={toggleModal}
                conteudo={
                  <div className="container-modal-lateral">
                    <h1>Filtro</h1>
                    <div className="campos-filtro">
                      <div className="filtro-colun-cobran">
                        <label>Colunas</label>
                        <select>
                          <option>Indicados</option>
                          <option>Tentativa de Contato</option>
                          <option>Oportunidade de Venda</option>
                          <option>Concluídos com Sucesso</option>
                          <option>Negados</option>
                          <option>Pagamento de Mensalidades</option>
                        </select>
                      </div>
                      <div className="filtro-data-cobran">
                        <label>Data Criação</label>
                        <input type="date"></input>
                      </div>
                    </div>
                    <div className="campos-filtro">
                      <div className="campos-01-cobranca">
                        <label>Nome</label>
                        <input placeholder="Informe o Nome"></input>
                      </div>
                      <div className="indicacoes-cliente-cobran">
                        <label>Telefone</label>
                        <input type="number"></input>
                      </div>
                    </div>
                    <div className="campos-filtro">
                      <label>Selecione:</label>
                    </div>
                    <div className="campos-filtro">
                      <div>
                        <Checkbox {...label} />
                        <label>1º Parcela</label>
                      </div>
                      <div>
                        <Checkbox {...label} />
                        <label>2º Parcela</label>
                      </div>
                      <div>
                        <Checkbox {...label} />
                        <label>3º Parcela</label>
                      </div>
                    </div>
                    <div className="campos-filtro">
                      <div>
                        <Checkbox {...label} />
                        <label>Óbito Inadimplente</label>
                      </div>
                      <div>
                        <Checkbox {...label} />
                        <label>Anual</label>
                      </div>
                      <div>
                        <Checkbox {...label} />
                        <label>3º Parcela</label>
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
            numeros={2}
            onCardClick={handleCardClick} // Passando a função de callback
          />
        ))}

        {modalClientes && selectedCardData && (
          <ModalClientes
            open={modalClientes}
            onClose={handleCloseFormularioModal}
            cardData={selectedCardData}
          />
        )}
      </div>
    </div>
  );
};

export default EscritorioCobranca;
