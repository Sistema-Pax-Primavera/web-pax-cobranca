import React, { useState } from "react";
import "./filtro-contrato.css";
import ButtonIconTextoStart from "../button-icon-texto-start";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name,
  cobrador,
  contrato,
  titular,
  mespago,
  ultimopagamento,
  aberto,
  rota,
  diapagamento,
  regiao,
  bairro
) {
  return {
    name,
    cobrador,
    contrato,
    titular,
    mespago,
    ultimopagamento,
    aberto,
    rota,
    diapagamento,
    regiao,
    bairro,
  };
}

const rows = [
  createData(
    "Dourados",
    "Sonia Maria Martins",
    4949,
    "Aderbal Souza",
    "20/05/2023",
    "20/06/2023",
    0,
    "Dia 01",
    12,
    "Região 03",
    "Vila Planalto"
  ),
  createData(
    "Rio Brilhante",
    "Eduardo Castilho",
    69560,
    "Lucas Henrique",
    "23/08/2023",
    "20/06/2023",
    0,
    "Dia 03",
    12,
    "Região 05",
    "Água Verde"
  ),
  createData(
    "Itaporã",
    "Larissa Ribeiro",
    13213,
    "Caio Felipe",
    "23/08/2023",
    "20/06/2023",
    0,
    "Dia 03",
    12,
    "Região 05",
    "Água Verde"
  ),
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const FiltroContrato = ({ toggleFiltros, onBack }) => {
  return (
    <div className="vendas-filtro-contrato">    
     <button onClick={onBack}>Voltar</button> 
      <div className="vendas-filtro-campos">
        <div className="numero-contrato-venda">
          <label>Contrato</label>
          <input type="number"></input>
        </div>
        <div className="numero-adicionar-contrato">
          <ButtonIconTextoStart
            fontSizeBotao="12px"
            corFundoBotao={"#006b33"}
            corTextoBotao={"#ffff"}
            fontWeightBotao="700"
            title={"ADICIONAR"}
          />
        </div>
        <div className="check-contrato-label">
          <Checkbox {...label} />
          <label>Marcar Todos</label>
        </div>
        <div className="check-contrato-label">
          <Checkbox {...label} />
          <label>Marcar Todos</label>
        </div>
      </div>
      <div className="table-venda-filtro-camp">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 12 }}>Unidade</TableCell>
                <TableCell align="start" sx={{ fontSize: 12 }}>
                  Cobrador
                </TableCell>
                <TableCell align="center" sx={{ fontSize: 12 }}>
                  Contrato
                </TableCell>
                <TableCell align="start" sx={{ fontSize: 12 }}>
                  Titular
                </TableCell>
                <TableCell align="center" sx={{ fontSize: 12 }}>
                  Mês Pago
                </TableCell>
                <TableCell align="center" sx={{ fontSize: 12 }}>
                  Ultímo Pagamento
                </TableCell>
                <TableCell align="center" sx={{ fontSize: 12 }}>
                  Aberto
                </TableCell>
                <TableCell align="center" sx={{ fontSize: 12 }}>
                  Rota
                </TableCell>
                <TableCell align="center" sx={{ fontSize: 12 }}>
                  Dia Pagamento
                </TableCell>
                <TableCell align="start" sx={{ fontSize: 12 }}>
                  Região
                </TableCell>
                <TableCell align="start" sx={{ fontSize: 12 }}>
                  Bairro
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ fontSize: 12 }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="start" sx={{ fontSize: 12 }}>
                    {row.cobrador}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: 12 }}>
                    {row.contrato}
                  </TableCell>
                  <TableCell align="start" sx={{ fontSize: 12 }}>
                    {row.titular}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: 12 }}>
                    {row.mespago}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: 12 }}>
                    {row.ultimopagamento}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: 12 }}>
                    {row.aberto}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: 12 }}>
                    {row.rota}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: 12 }}>
                    {row.diapagamento}
                  </TableCell>
                  <TableCell align="start" sx={{ fontSize: 12 }}>
                    {row.regiao}
                  </TableCell>
                  <TableCell align="start" sx={{ fontSize: 12 }}>
                    {row.bairro}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
      </div>
      <div className="tipos-campos-envios01">
        <div className="todos-campos-envios">
          <div className="vendas-filtro-campos3">
            <div className="numero-contrato-venda2">
              <label>Tipo de Transferência</label>
              <div className="enviar-transferir-somente">
                <Checkbox {...label} />
                <label>Enviar</label>
                <Checkbox {...label} />
                <label>Enviar e Transferir</label>
                <Checkbox {...label} />
                <label>Somente Transferir</label>
              </div>
            </div>
            <div className="numero-contrato-venda">
              <label>Cobrador</label>
              <select></select>
            </div>
            <div className="numero-contrato-venda3">
              <label>Rota</label>
              <select></select>
            </div>
            <div className="numero-contrato-venda3">
              <label>Região</label>
              <select></select>
            </div>
            <div className="numero-contrato-venda">
              <label>Justificativa</label>
              <select></select>
            </div>
          </div>
          <div className="observacao-do-envio">
            <label>Observações</label>
            <textarea></textarea>
          </div>
          <div className="tamanho-salva-contrato">
            <ButtonIconTextoStart
              title={"SALVAR"}
              corFundoBotao={"#006b33"}
              corTextoBotao={"#ffff"}
              fontWeightBotao={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltroContrato;