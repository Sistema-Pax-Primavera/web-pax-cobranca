import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import ButtonText from "../../../../pax-associado/src/components/button-texto/index";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FiltroTabelas2 from "../filtro-tabelas2";
import "./filtro-tabelas1.css";
import FiltroContrato from "../filtro-contrato";

function createData(name, cobrador, quantidade, status, opcao) {
  return { name, cobrador, quantidade, status, opcao };
}

const rows = [
  createData("Dourados", "Thiago Gonsalvez", 11, "ATIVO"),
  createData("Dourados", "Diogo Perez", 10, "ATIVO"),
  createData("Dourados", "Marcos Lopez", 15, "ATIVO"),
  createData("Dourados", "Thiago Gonsalvez", 11, "ATIVO"),
  createData("Dourados", "Diogo Perez", 10, "ATIVO"),
  createData("Dourados", "Marcos Lopez", 15, "ATIVO"),
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const FiltroTabelas1 = () => {
  const [filtro2Visivel, setFiltro2Visivel] = useState(false);
  const [filtroContratoVisivel, setFiltroContratoVisivel] = useState(false);

  const toggleFiltro2Visivel = ({onMostrarFiltro2 }) => {
    setFiltro2Visivel(!filtro2Visivel);
  };

  const toggleFiltros = () => {
    setFiltroContratoVisivel(true); // Mostra FiltroContrato
    setFiltro2Visivel(!filtro2Visivel); // Toggle FiltroTabelas2
  };
  return (
    <div className="container-filtro-envio">
      <div className="filtro-envios">
        <div className="check-ativo-inativo-env">
          <div className="campos-envio-filtro">
            <Checkbox {...label} size="small" color="success" />
            <label>Somente Ativos</label>
          </div>
          <div className="campos-envio-filtro">
            <Checkbox {...label} size="small" color="success" />
            <label>Somente com Clientes</label>
          </div>
        </div>
        <div className="check-ativo-inativo-env">
          <label>Cobrador</label>
          <select></select>
        </div>
        <div className="pesquisa-envio">
          <ButtonText title="PESQUISAR" />
          <ButtonText title="FILTRO 2" funcao={toggleFiltros} />
        </div>
      </div>
      <div className="filtro-resultado-envios">
        <TableContainer component={Paper} sx={{ maxHeight: 200 }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 12 }}>Unidade</TableCell>
                <TableCell align="start" sx={{ fontSize: 12 }}>
                  Cobrador
                </TableCell>
                <TableCell align="center" sx={{ fontSize: 12 }}>
                  Quantidade
                </TableCell>
                <TableCell align="center" sx={{ fontSize: 12 }}>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody sx={{}}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{
                    "&:last-child td, &:last-child th": {
                      border: 0,
                      overflow: "auto",
                    },
                  }}
                >
                  <TableCell component="th" scope="row" sx={{ fontSize: 12 }}>
                    {row.name}
                  </TableCell>
                  <TableCell align="start" sx={{ fontSize: 12 }}>
                    {row.cobrador}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: 12 }}>
                    {row.quantidade}
                  </TableCell>
                  <TableCell align="center" sx={{ fontSize: 12 }}>
                    {row.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {filtro2Visivel && <FiltroTabelas2 />}
    </div>
  );
};

export default FiltroTabelas1;
