import React, { useState } from "react";
import "./balao.css";
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
function createData(name, mes, valor, vencimento) {
  return { name, mes, valor, vencimento };
}

const rows = [
  createData("01", "Janeiro", "100,00", "20/01/2024"),
  createData("02", "Fevereiro", "100,00", "20/02/2024"),
  createData("03", "Março", "100,00", "20/03/2024"),
  createData("04", "Abril", "100,00", "20/04/2024"),
];

const Balao = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [parcelasSelecionadas, setParcelasSelecionadas] = useState(0);
  const [loading, setLoading] = useState(false);
  const [valorTotal, setValorTotal] = useState(0);
  const [finalizado, setFinalizado] = useState(false); // Novo estado para indicar se o processo foi finalizado
  const [porcentagemDesconto, setPorcentagemDesconto] = useState(0);
  const [valorTotalDesconto, setValorTotalDesconto] = useState(0);
  
  const handlePorcentagemDescontoChange = (event) => {
    const porcentagem = parseFloat(event.target.value);
    setPorcentagemDesconto(porcentagem);
  
    // Calcula o valor total do desconto
    const desconto = (porcentagem / 100) * parseFloat(valorTotal);
    const valorTotalComDesconto = parseFloat(valorTotal) - desconto;
    setValorTotalDesconto(valorTotalComDesconto.toFixed(2));
  };
  
  const handleRowClick = (name, valor) => {
    // Verifica se a linha já está selecionada
    const selectedIndex = selectedRows.indexOf(name);
    let newSelectedRows = [];
  
    if (selectedIndex === -1) {
      // Se não estiver selecionada, adiciona à lista de selecionadas
      newSelectedRows = newSelectedRows.concat(selectedRows, name);
    } else if (selectedIndex === 0) {
      // Se for a primeira selecionada, remove-a da lista
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      // Se for a última selecionada, remove-a da lista
      newSelectedRows = newSelectedRows.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      // Se estiver no meio, remove-a da lista
      newSelectedRows = newSelectedRows.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }
  
    setSelectedRows(newSelectedRows);
  
    // Atualiza o número de parcelas selecionadas
    setParcelasSelecionadas(newSelectedRows.length);
  
    // Calcula o valor total das parcelas selecionadas
    const total = rows.reduce((acc, row) => {
      if (newSelectedRows.includes(row.name)) {
        return acc + parseFloat(row.valor.replace(",", "."));
      } else {
        return acc;
      }
    }, 0);
  
    setValorTotal(total.toFixed(2));
  };
  
  

  const selectAllRows = () => {
    const allRowsNames = rows.map((row) => row.name);
    setSelectedRows(allRowsNames);
    setParcelasSelecionadas(allRowsNames.length);

    // Calcular o valor total quando todas as parcelas são selecionadas
    const total = allRowsNames.reduce((acc, row) => {
      const selectedRow = rows.find((r) => r.name === row);
      if (selectedRow && selectedRow.valor) {
        return acc + parseFloat(selectedRow.valor.replace(",", "."));
      } else {
        return acc;
      }
    }, 0);

    setValorTotal(total.toFixed(2));
  };

  const handleFinalizar = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFinalizado(true); // Atualiza o estado para indicar que o processo foi finalizado
    }, 3000);
  };



  return (
    <div className="avuls-confirma">
      <div className="container-balao-boletos">
        <HeaderGeradorBoletos />
        <div className="container-balao">
          <div className="container-balao2">
            <div className="linhas-campo-balao">
              <div className="campos-balao01">
                <label>Contrato</label>
                <input type="number"></input>
              </div>
              <div className="campos-balao01">
                <label>CEP</label>
                <input type="number"></input>
              </div>
              <div className="campos-balao01-buttao">
                <ButtonIconTextoStart
                  title={"BUSCAR"}
                  corFundoBotao={"#006b33"}
                  corTextoBotao={"#ffff"}
                  fontWeightBotao={700}
                />
              </div>
            </div>
            <div className="linhas-campo-balao">
              <div className="campos-balao02">
                <label>Parcelas Selecionadas: </label>
                <p>{parcelasSelecionadas}</p>
              </div>
              <div className="campos-balao02">
                <label>Valor Total: </label>
                <p>{valorTotal}</p>
              </div>
              <div className="campos-balao02">
                <label>Porcentagem de Desconto </label>
                <input type="number" value={porcentagemDesconto} onChange={handlePorcentagemDescontoChange} />
              </div>
              <div className="campos-balao02">
                <label>Valor Total Desconto </label>
                <p>{valorTotalDesconto}</p>
              </div>
              <div className="campos-balao01-buttao">
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
          <div className=".tabela-balao">
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

export default Balao;
