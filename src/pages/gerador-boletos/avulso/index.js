import React, { useState } from "react";
import "./avulso.css";
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
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function createData(name, mes, valor, vencimento) {
  return { name, mes, valor, vencimento };
}

const rows = [
  createData("01", "Janeiro", "100,00", "20/01/2024"),
  createData("02", "Fevereiro", "100,00", "20/02/2024"),
  createData("03", "Março", "100,00", "20/03/2024"),
  createData("04", "Abril", "100,00", "20/04/2024"),
];

const Avulso = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [parcelasSelecionadas, setParcelasSelecionadas] = useState(0);
  const [loading, setLoading] = useState(false);
  const [valorTotal, setValorTotal] = useState(0);
  const [finalizado, setFinalizado] = useState(false); // Novo estado para indicar se o processo foi finalizado
  const [selectAll, setSelectAll] = useState(false);

  const handleRowClick = (name, valor) => {
    let newSelectedRows = [...selectedRows];
    if (selectedRows.includes(name)) {
      newSelectedRows = newSelectedRows.filter((row) => row !== name);
    } else {
      newSelectedRows.push(name);
    }
    setSelectedRows(newSelectedRows);
    setParcelasSelecionadas(newSelectedRows.length);
    calculateTotal(newSelectedRows);
  };

  const calculateTotal = (selectedRows) => {
    const total = selectedRows.reduce((acc, row) => {
      const selectedRow = rows.find((r) => r.name === row);
      if (selectedRow && selectedRow.valor) {
        return acc + parseFloat(selectedRow.valor.replace(",", "."));
      } else {
        return acc;
      }
    }, 0);
    setValorTotal(total.toFixed(2));
  };

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
      setParcelasSelecionadas(0);
      setValorTotal(0);
    } else {
      const allRowsNames = rows.map((row) => row.name);
      setSelectedRows(allRowsNames);
      setParcelasSelecionadas(allRowsNames.length);
      calculateTotal(allRowsNames);
    }
    setSelectAll(!selectAll);
  };

  const handleFinalizar = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFinalizado(true);
    }, 3000);
  };

  return (
    <div className="avuls-confirma">
      <div className="container-avulso-boletos">
        <HeaderGeradorBoletos />
        <div className="container-avulso">
          <div className="container-avulso2">
            <div className="linhas-campo-avulso">
              <div className="campos-avulso01">
                <label>Contrato</label>
                <input type="number"></input>
              </div>
              <div className="campos-avulso01">
                <label>CEP</label>
                <input type="number"></input>
              </div>
              <div className="campos-avulso01-buttao">
                <ButtonIconTextoStart
                  title={"BUSCAR"}
                  corFundoBotao={"#006b33"}
                  corTextoBotao={"#ffff"}
                  fontWeightBotao={700}
                />
              </div>
            </div>
            <div className="linhas-campo-avulso">
              <div className="campos-avulso02">
                <label>Parcelas Selecionadas: </label>
                <p>{parcelasSelecionadas}</p>
              </div>
              <div className="campos-avulso02">
                <label>Valor Total: </label>
                <p>{valorTotal}</p>
              </div>
              <div className="campos-avulso01-buttao">
                <Switch checked={selectAll} onChange={toggleSelectAll} />
                <label>Selecionar Todas</label>
              </div>
              <div className="campos-avulso01-buttao">
                <ButtonIconTextoStart
                  title={"FINALIZAR"}
                  corFundoBotao={"#006b33"}
                  corTextoBotao={"#ffff"}
                  fontWeightBotao={700}
                  funcao={handleFinalizar}
                />
              </div>
            </div>
          </div>
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Parcela</TableCell>
                    <TableCell align="start">Mês</TableCell>
                    <TableCell align="start">Valor</TableCell>
                    <TableCell align="center">Vencimento</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        backgroundColor: selectedRows.includes(row.name)
                          ? "#006b33"
                          : "inherit",
                        color: selectedRows.includes(row.name)
                          ? "#fff"
                          : "inherit",
                      }}
                      onClick={() => handleRowClick(row.name, row.valor)}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{
                          color: selectedRows.includes(row.name)
                            ? "#fff"
                            : "inherit",
                        }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="start"
                        style={{
                          color: selectedRows.includes(row.name)
                            ? "#fff"
                            : "inherit",
                        }}
                      >
                        {row.mes}
                      </TableCell>
                      <TableCell
                        align="start"
                        style={{
                          color: selectedRows.includes(row.name)
                            ? "#fff"
                            : "inherit",
                        }}
                      >
                        {row.valor}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{
                          color: selectedRows.includes(row.name)
                            ? "#fff"
                            : "inherit",
                        }}
                      >
                        {row.vencimento}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        {loading && (
          <div className="overlay">
            <Carregando />
          </div>
        )}
        {finalizado && ( // Renderiza o botão para baixar o boleto se o processo estiver finalizado
          <div className="botao-baixa-bole">
            <label>Boleto gerado com sucesso! </label>
            <div>
              <ButtonIconTextoStart
                icon={<CloudDownloadOutlinedIcon />}
                corFundoBotao={"#006b33"}
                corTextoBotao={"#ffff"}
                fontWeightBotao={800}
              />
            </div>
            <div>
              <ButtonIconTextoStart
                title={"COPIE O CÓDIGO DE BARRAS"}
                corFundoBotao={"#006b33"}
                corTextoBotao={"#ffff"}
                fontWeightBotao={700}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Avulso;