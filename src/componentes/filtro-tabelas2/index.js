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
import "./filtro-tabelas2.css";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ButtonIcon from "../../../../pax-associado/src/components/button-icon/index";
function createData(name, cobrador, quantidade, status) {
  return { name, cobrador, quantidade, status };
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

const FiltroTabelas2 = ({ onOcultarFiltros  }) => {
  const handleClicarIcone = () => {
    if (typeof onOcultarFiltros === 'function') {
      onOcultarFiltros();
    }
  };
  

  return (
    <div>
      <div className="filtro-envios">
        <div className="check-options-envios">
          <div className="check-ativo-inativo-env2">
            <div className="campos-envio-filtro">
              <Checkbox {...label} size="small" color="success" />
              <label>Rotas</label>
            </div>
            <div className="campos-envio-filtro">
              <Checkbox {...label} size="small" color="success" />
              <label>Bairros</label>
            </div>
            <div className="campos-envio-filtro">
              <Checkbox {...label} size="small" color="success" />
              <label>Regiões</label>
            </div>
          </div>
          <div className="check-ativo-inativo-env2">
            <div className="campos-envio-filtro">
              <Checkbox {...label} size="small" color="success" />
              <label>Marcar Todos</label>
            </div>
            <div className="campos-envio-filtro">
              <Checkbox {...label} size="small" color="success" />
              <label>Desmarcar Todos</label>
            </div>
          </div>
        </div>

        <div className="pesquisa-envio2">
          <ButtonText title="PESQUISAR" />
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
                <TableCell align="center" sx={{ fontSize: 12 }}>
                  Análise
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
                  <TableCell component="th" scope="row">
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
                  <TableCell align="center" sx={{ fontSize: 12 }}>
                    <div className="analise-filtro-envios2">
                      <div className="analise-filtro-envios">
                        <ButtonIcon
                          icon={<AnalyticsIcon />}
                          funcao={handleClicarIcone}
                         
                        ></ButtonIcon>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default FiltroTabelas2;
