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
                <input
                  type="number"
                  value={porcentagemDesconto}
                  onChange={handlePorcentagemDescontoChange}
                />
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
          <div className="boleto-balao">
            <div className="linhas-boletos">
              <div className="campos-linhas-boletos1">
                <label>Banco do Brasil</label>
              </div>
              <div className="campos-linhas-boletos2">
                <label>000-0</label>
              </div>
              <div className="campos-linhas-boletos3">
                <label>
                  00000.00000 00000.000000 00000.00000 0 00000000000000
                </label>
              </div>
            </div>
            <div className="linhas-boletos">
              <div className="campos-linhas-boletos4">
                <label>Local de Pagamento</label>
                <label>
                  Pagável em qualquer banco até o vencimento.
                </label>
              </div>
              <div className="campos-linhas-boletos5">
                <label>Vencimento</label>
                <p>00/00/0000</p>
              </div>
            </div>
            <div className="linhas-boletos">
              <div className="campos-linhas-boletos4">
                <label>Beneficiário</label>
                <label>Teste 01</label>
              </div>
              <div className="campos-linhas-boletos5">
                <label>Agência/Cod. beneficiario</label>
                <p>0000-0/0000000</p>
              </div>
            </div>
            <div className="linhas-boletos">
              <div className="campos-linhas-boletos6">
                <label>Data Documento</label>
                <label>00/00/0000</label>
              </div>
              <div className="campos-linhas-boletos6">
                <label>Nº do Documento</label>
                <label>00000000</label>
              </div>
              <div className="campos-linhas-boletos7">
                <label>Espécie DOC</label>
                <label>DM</label>
              </div>
              <div className="campos-linhas-boletos8">
                <label>Aceite</label>
                <label>N</label>
              </div>
              <div className="campos-linhas-boletos15">
                <label>Data Processamento</label>
                <label>00/00/0000</label>
              </div>
              <div className="campos-linhas-boletos5">
                <label>Nosso Número</label>
                <p>000000000000 0</p>
              </div>
            </div>
            <div className="linhas-boletos">
              <div className="campos-linhas-boletos9">
                <label>Uso do Banco</label>
              </div>
              <div className="campos-linhas-boletos10">
                <label>Carteira</label>
                <label>000</label>
              </div>
              <div className="campos-linhas-boletos10">
                <label>Espécie</label>
                <label>R$</label>
              </div>
              <div className="campos-linhas-boletos11">
                <label>Quantidade</label>
                <label>00</label>
              </div>
              <div className="campos-linhas-boletos16">
                <label>Valor</label>
                <label>00/00/0000</label>
              </div>
              <div className="campos-linhas-boletos5">
                <label>(=)Valor do Documento</label>
                <p>R$ 123,00</p>
              </div>
            </div>
            <div className="linhas-boletos">
              <div className="campos-linhas-boletos12">
                <label>Instruções</label>
              </div>
              <div className="campos-colunas-boletos">
                <div className="campos-linhas-boletos13">
                  <label>(-)Desconto</label>
                  <p>R$ 00,00</p>
                </div>
                <div className="campos-linhas-boletos13">
                  <label>(-)Mora/Multa/Juros</label>
                  <p>R$ 00,00</p>
                </div>
                <div className="campos-linhas-boletos13">
                  <label>(+)Outros acrécimos</label>
                  <p>R$ 00,00</p>
                </div>
                <div className="campos-linhas-boletos13">
                  <label>(=)Valor Cobrado</label>
                  <p>R$ 00,00</p>
                </div>
              </div>
            </div>
            <div className="linhas-boletos">
              <div className="campos-linhas-boletos40">
                <label>Pagador:</label>
                <label>Nome do Pagador:</label>
                <label>CPF/CNPJ:</label>
              </div>
              <div className="campos-linhas-boletos14">
                <label>Código da Baixa</label>
              </div>
            </div>
            
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
