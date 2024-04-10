import React, { useState } from "react";
import "./lote.css";
import HeaderGeradorBoletos from "../../../components/header-gerador-boletos";
import ButtonIconTextoStart from "../../../components/button-icon-texto-start";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Carregando from "../../../components/carregando";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import Checkbox from "@mui/material/Checkbox";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import GroupIcon from "@mui/icons-material/Group";
import TaskIcon from "@mui/icons-material/Task";
import ModalPequena from "../../../components/modal-pequena";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function createData(name, mes, valor, vencimento) {
  return { name, mes, valor, vencimento };
}

const contras = [
  contrato(
    64464,
    "Lucas Ribeiro",
    5646,
    "20/05/2023",
    61554488,
    "100,00",
    "Alta",
    "20/05/2023",
    7982352
  ),
  contrato(
    32587,
    "Luiza Santana",
    9889,
    "22/07/2023",
    94652221,
    "100,00",
    "Alta",
    "27/05/2023",
    7854123
  ),
  contrato(
    64464,
    "Lucas Ribeiro",
    5646,
    "20/05/2023",
    61554488,
    "100,00",
    "Alta",
    "20/05/2023",
    7982352
  ),
  contrato(
    32587,
    "Luiza Santana",
    9889,
    "22/07/2023",
    94652221,
    "100,00",
    "Alta",
    "27/05/2023",
    7854123
  ),
];

function contrato(
  name,
  cliente,
  codigo,
  vencimentoContrato,
  cpf,
  valorboleto,
  valorDesconto,
  prioridade,
  diaPagamento,
  cep
) {
  return {
    name,
    cliente,
    codigo,
    vencimentoContrato,
    cpf,
    valorboleto,
    valorDesconto,
    prioridade,
    diaPagamento,
    cep,
  };
}

const rows = [
  createData("Visitas Maria Roseli(Vendas)", "Visitas Maria Roseli", 20),
  createData("Visitas Maria Luci(Vendas)", "Visitas Maria Luci", 70),
  createData("Vendas Padrão", "Vendas Padrão", 120),
  createData("Vendas Categoria", "Vendas Categoria", 31),
];

const Lote = () => {
  const [linhasSelecionadas, setLinhasSelecionadas] = useState([]);
  const [cobradoresSelecionados, setCobradoresSelecionados] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [linhasSelecionadas2, setLinhasSelecionadas2] = useState([]);
  const [cobradoresSelecionados2, setCobradoresSelecionados2] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleConfirmarClick = () => {
    // Lógica para confirmar seleção
    if (linhasSelecionadas.length > 0) {
      setCobradoresSelecionados(true);
      handleCloseModal();
    }
  };

  const handleTableRowClick = (index) => {
    // Lógica para lidar com a seleção de linha
    if (linhasSelecionadas.includes(index)) {
      setLinhasSelecionadas(
        linhasSelecionadas.filter((item) => item !== index)
      );
    } else {
      setLinhasSelecionadas([...linhasSelecionadas, index]);
    }
  };

  const handleConfirmarClick2 = () => {
    // Lógica para confirmar seleção
    if (linhasSelecionadas2.length > 0) {
      setCobradoresSelecionados2(true);
      handleCloseModal();
    }
  };

  const handleTableRowClick2 = (index) => {
    // Lógica para lidar com a seleção de linha
    if (linhasSelecionadas2.includes(index)) {
      setLinhasSelecionadas2(
        linhasSelecionadas2.filter((item) => item !== index)
      );
    } else {
      setLinhasSelecionadas2([...linhasSelecionadas, index]);
    }
  };
  return (
    <div className="avuls-confirma">
      <div className="container-lote-boletos">
        <HeaderGeradorBoletos />
        <div className="container-lote">
          <div className="container-lote-2-card">
            <div className="container-lote2">
              <div className="linhas-campo-lote">
                <div className="campos-lote01">
                  <label>Contrato</label>
                  <input type="number"></input>
                </div>
                <div className="campos-lote01">
                  <label>CEP</label>
                  <input type="number"></input>
                </div>
                <div className="de-ate-lote1">
                  <label>Dia Vencimento</label>
                  <div className="de-ate-lote">
                    <label>De</label>
                    <input type="number" placeholder="0"></input>
                    <label>Até</label>
                    <input type="number" placeholder="31"></input>
                  </div>
                </div>
                <div className="campos-lote01">
                  <label>Região</label>
                  <select></select>
                </div>
                <div className="filter-botao">
                  <ModalPequena
                    icon={<FilterAltIcon fontSize={"small"} />}
                    corFundoBotao={"#006b33"}
                    corTextoBotao={"#ffff"}
                    width={"350px"}
                    fontWeightBotao={700}
                    conteudo={
                      <div className="modal-anual-mensal">
                        <div className="anual-mensal">
                          <label>Anual</label>
                          <div className="busca-ate">
                            <div className="campos-lote01-ate">
                              <label>Buscar a partir de</label>
                              <input type="date"></input>
                            </div>
                            <div className="campos-lote01-ate">
                              <label>Até o dia</label>
                              <input type="date"></input>
                            </div>
                          </div>
                        </div>
                        <div className="anual-mensal">
                          <label>Mensal</label>
                          <div className="busca-ate">
                            <div className="campos-lote01-ate">
                              <label>Adiantados a partir de</label>
                              <input type="date"></input>
                            </div>
                            <div className="campos-lote01-ate">
                              <label>Vencimentos Adiantadas</label>
                              <input type="date"></input>
                            </div>
                          </div>
                        </div>
                        <div className="aplica-filtro-anual-mensal">
                          <ButtonIconTextoStart
                            title={"APLICAR FILTRO"}
                            corFundoBotao={"#006b33"}
                            corTextoBotao={"#ffff"}
                            fontWeightBotao={700}
                          />
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
              <div className="linhas-campo-lote">
                <div className="campos-lote3">
                  <Checkbox {...label} size="small" />
                  <label>Residência</label>
                  <Checkbox {...label} size="small" />
                  <label>Escritório</label>
                  <Checkbox {...label} size="small" />
                  <label>E-mail</label>
                  <Checkbox {...label} size="small" />
                  <label>Pix</label>
                  <Checkbox {...label} size="small" />
                  <label>Correios</label>
                  <Checkbox {...label} size="small" />
                  <label>Recorrente</label>
                  <Checkbox {...label} size="small" />
                  <label>WhatsApp</label>
                  <Checkbox {...label} size="small" />
                  <label>Indefinido </label>
                </div>
              </div>
              <div className="linhas-campo-lote">
                <div className="campos-lote01-buttao">
                  <ModalPequena
                    icon={<GroupIcon fontSize={"small"} />}
                    title={"Cobradores"}
                    fontSizeBotao={10}
                    corFundoBotao={"#006b33"}
                    corTextoBotao={"#ffff"}
                    fontWeightBotao={700}
                    openModal={openModal}
                    onCloseModal={handleCloseModal}
                    conteudo={
                      <div className="tabela-lote">
                        <label>Selecione um cobrador</label>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 650 }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Cobrador</TableCell>
                                <TableCell align="start">Região</TableCell>
                                <TableCell align="center">
                                  Quantidade Clientes
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows.map((row, index) => (
                                <TableRow
                                  key={row.name}
                                  onClick={() => handleTableRowClick(index)}
                                  style={{
                                    cursor: "pointer",
                                    backgroundColor:
                                      linhasSelecionadas.includes(index)
                                        ? "#006b33"
                                        : "",
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="start">{row.mes}</TableCell>
                                  <TableCell align="center">
                                    {row.valor}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <div className="align-cobrador-botao">
                          <div className="confirma-cobrador">
                            <ButtonIconTextoStart
                              title={"CONFIRMAR"}
                              corFundoBotao={"#006b33"}
                              corTextoBotao={"#ffff"}
                              fontWeightBotao={700}
                              funcao={handleConfirmarClick}
                            />
                          </div>
                        </div>
                      </div>
                    }
                  />
                </div>
                <div className="campos-lote01-buttao">
                  <ModalPequena
                    icon={<TaskIcon fontSize={"small"} />}
                    title={"PLANOS"}
                    fontSizeBotao={10}
                    corFundoBotao={"#006b33"}
                    corTextoBotao={"#ffff"}
                    fontWeightBotao={700}
                    conteudo={
                      <div className="tabela-lote">
                        <label>Selecione um plano</label>
                        <TableContainer component={Paper}>
                          <Table
                            sx={{ minWidth: 650 }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell>Plano</TableCell>
                                <TableCell align="start">
                                  Valor Adicional
                                </TableCell>
                                <TableCell align="center">Quantidade</TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows.map((row, index) => (
                                <TableRow
                                  key={row.name}
                                  onClick={() => handleTableRowClick2(index)}
                                  style={{
                                    cursor: "pointer",
                                    backgroundColor:
                                      linhasSelecionadas2.includes(index)
                                        ? "#006b33"
                                        : "",
                                  }}
                                >
                                  <TableCell component="th" scope="row">
                                    {row.name}
                                  </TableCell>
                                  <TableCell align="start">{row.mes}</TableCell>
                                  <TableCell align="center">
                                    {row.valor}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </TableContainer>

                        <div className="align-cobrador-botao">
                          <div className="confirma-cobrador">
                            <ButtonIconTextoStart
                              title={"CONFIRMAR"}
                              corFundoBotao={"#006b33"}
                              corTextoBotao={"#ffff"}
                              fontWeightBotao={700}
                              funcao={handleConfirmarClick2}
                            />
                          </div>
                        </div>
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
            <div className="result-cobra-plan">
              <div
                className="resultado01-cobra"
                style={{
                  backgroundColor: cobradoresSelecionados
                    ? "#006b33"
                    : "#D9D9D9",
                  color: "#ffffff",
                }}
              >
                <GroupIcon />
                <label>
                  {cobradoresSelecionados
                    ? "Cobradores Selecionados"
                    : "Cobradores Não Selecionados"}
                </label>
              </div>
              <div
                className="resultado01-cobra"
                style={{
                  backgroundColor: cobradoresSelecionados2
                    ? "#006b33"
                    : "#D9D9D9",
                  color: "#ffffff",
                }}
              >
                <TaskIcon />
                <label>
                  {cobradoresSelecionados2
                    ? "Planos Selecionados"
                    : "Planos Não Selecionados"}
                </label>
              </div>
            </div>
          </div>
          <div className=".tabela-lote">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Contrato</TableCell>
                    <TableCell align="start">Cliente</TableCell>
                    <TableCell align="center">Código Boleto</TableCell>
                    <TableCell align="center">Vencimento</TableCell>
                    <TableCell align="center">CPF</TableCell>
                    <TableCell align="center">Valor Boleto</TableCell>
                    <TableCell align="center">Prioridade</TableCell>
                    <TableCell align="center">Dia Pagamento</TableCell>
                    <TableCell align="center">CEP</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contras.map((contra, index) => (
                    <TableRow key={contra.name}>
                      <TableCell component="th" scope="row">
                        {contra.name}
                      </TableCell>
                      <TableCell align="start">{contra.cliente}</TableCell>
                      <TableCell align="center">{contra.codigo}</TableCell>
                      <TableCell align="center">
                        {contra.vencimentoContrato}
                      </TableCell>
                      <TableCell align="center">{contra.cpf}</TableCell>
                      <TableCell align="center">{contra.valorboleto}</TableCell>
                      <TableCell align="center">
                        {contra.valorDesconto}
                      </TableCell>
                      <TableCell align="center">{contra.prioridade}</TableCell>
                      <TableCell align="center">
                        {contra.diaPagamento}
                      </TableCell>
                      <TableCell align="center">{contra.cep}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lote;
