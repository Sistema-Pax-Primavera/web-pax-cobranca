import React, { useState, useEffect } from "react";
import { Modal, Box, Typography, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./telemarketing.css";
import ButtonText from "../../../../pax-associado/src/components/button-texto";
import ButtonIconFundo from "../../../../pax-associado/src/components/button-icon-sem-fundo/index";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import PersonIcon from "@mui/icons-material/Person";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import ChecklistIcon from "@mui/icons-material/Checklist";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ButtonIconRed from "../../../../pax-associado/src/components/button-icon-red";
import "react-calendar/dist/Calendar.css";
import TableComponent from "../../components/table/table";
import { headerExtrato } from "../../entities/headers/header-extrato";
import { headerObservacao } from "../../entities/headers/header-observacao";
import { headerDependente } from "../../entities/headers/header-dependente";
import { formatarTelefone } from "../../utils/fuctions";
import { toast } from "react-toastify";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import Switch from "@material-ui/core/Switch";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ModalHistorico from "../../components/modal-historico";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import AddCardOutlinedIcon from "@mui/icons-material/AddCardOutlined";
import Button from "@mui/material/Button";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useCobranca } from "../../service/api";
import ButtonIcon from "../../components/button-icon";
import Carregando from "../../components/carregando";
import ButtonIconTextoStart from "../../components/button-icon-texto-start";
import { headerTele } from "../../entities/headers/header-tele";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1200,
    height: 600,
    bgcolor: "background.paper",
    outline: "none",
    borderRadius: 3,
    overflowX: "hidden",
    border: "none",
    boxShadow: 24,
};

const Telemarketing = () => {
    const { getTelemarketing } = useCobranca();
    const [clientes, setClientes] = useState([]);
    const [clienteFiltrado, setClienteFiltrado] = useState(null);
    const [currentCliente, setCurrentCliente] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);
    const [pesquisar, setPesquisar] = useState(true);
    const [tipoTele, setTipoTele] = useState("");
    const [clienteIndex, setClienteIndex] = useState(0);
    const [mostrarFormularioCadastro, setMostrarFormularioCadastro] =
        useState(false);
    const [mostrarFormularioContato, setMostrarFormularioContato] =
        useState(false);
    const [mostrarFormularioPagamento, setMostrarFormularioPagamento] =
        useState(false);
    const [mostrarFormularioDependente, setMostrarFormularioDependente] =
        useState(false);
    const [mostrarFormularioObservacao, setMostrarFormularioObservacao] =
        useState(false);
    const [isAtendimento, setIsAtendimento] = useState(false);
    const [contador, setContador] = useState({
        horas: 0,
        minutos: 0,
        segundos: 0,
    });
    const [contadorAtivo, setContadorAtivo] = useState(false);
    const [categoria, setCategoria] = useState("");
    const [subcategoria, setSubCategoria] = useState("");
    const [comentario, setComentario] = useState("");
    const [historico, setHistorico] = useState([]);
    const [isAtendeu, setIsAtendeu] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openTele, setOpenTele] = useState(false);

    const handlePesquisar = (tipo) => {
        if (!contadorAtivo) {
            setOpenTele(false);
            setCurrentCliente(null);
            setTipoTele(tipo)
            if (tipo === 'ct') {
                if (searchTerm) {
                    const nome = searchTerm.toLowerCase();
                    const filteredClientes = clientes.filter(cliente =>
                        cliente.nome.toLowerCase().includes(nome)
                    );
                    setClienteFiltrado(filteredClientes)
                    setPesquisar(false);
                }
            } else if (tipo === 'filtro') {
                setClienteFiltrado(clientes);
                setPesquisar(true);
                setCurrentCliente(clientes[0]);
                setClienteIndex(0);
                setOpenTele(true);
            }
        } else {
            toast.error("Finalize o atendimento antes de fechar a janela!");
        }
    };

    const handleView = (cliente) => {
        setCurrentCliente(cliente);
        setOpenTele(true);
        setPesquisar(true);
    };

    const handleNextCliente = () => {
        if (clienteIndex < clienteFiltrado.length - 1) {
            const nextIndex = clienteIndex + 1;
            setCurrentCliente(clienteFiltrado[nextIndex]);
            setClienteIndex(nextIndex);
        }
    };

    const handleOpen = (e) => {
        setOpenModal(true);
        setPesquisar(true);
    };

    const handleClose2 = () => {
        setOpenModal(false);
    };
    const handleCheckboxChange = () => {
        setIsAtendeu(!isAtendeu);
        console.log("isAtendeu mudou para:", !isAtendeu);
    };

    const handleComentarioChange = (event) => {
        setComentario(event.target.value);
    };

    const adicionarComentario = () => {
        if (comentario.trim() !== "") {
            const novoHistorico = [
                ...historico,
                { atividade, comentario, dataHora: new Date().toLocaleString() },
            ];
            setHistorico(novoHistorico);
            setComentario("");
        }
    };

    const handleClose = () => {
        if (isAtendimento) {
            toast.error("Finalize o atendimento antes de fechar a janela!");
        } else {
            onClose();
        }
    };

    const handleAtender = () => {
        if (contadorAtivo) {
            setContadorAtivo(false);
            setIsAtendimento(false);
        } else {
            setContadorAtivo(true);
            setIsAtendimento(true);
        }
    };

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : `${time}`;
    };

    const mostrarMensagem = () => {
        toast.warning("Inicie o atendimento para liberar essa informação!");
    };

    const mostrarFormulario = (tipo) => {
        if (tipo === "contato") {
            setMostrarFormularioCadastro(false);
            setMostrarFormularioDependente(false);
            setMostrarFormularioObservacao(false);
            setMostrarFormularioPagamento(false);
            setMostrarFormularioContato(true);
        } else if (tipo === "pagamento") {
            setMostrarFormularioCadastro(false);
            setMostrarFormularioDependente(false);
            setMostrarFormularioObservacao(false);
            setMostrarFormularioContato(false);
            setMostrarFormularioPagamento(true);
        } else if (tipo === "dependente") {
            setMostrarFormularioCadastro(false);
            setMostrarFormularioContato(false);
            setMostrarFormularioPagamento(false);
            setMostrarFormularioObservacao(false);
            setMostrarFormularioDependente(true);
        } else if (tipo == "historico") {
            setMostrarFormularioCadastro(false);
            setMostrarFormularioDependente(false);
            setMostrarFormularioContato(false);
            setMostrarFormularioPagamento(false);
            setMostrarFormularioObservacao(true);
        } else if (tipo === "cadastro") {
            setMostrarFormularioDependente(false);
            setMostrarFormularioContato(false);
            setMostrarFormularioPagamento(false);
            setMostrarFormularioObservacao(false);
            setMostrarFormularioCadastro(true);
        }
    };

    useEffect(() => {
        let intervalId;

        if (contadorAtivo) {
            intervalId = setInterval(() => {
                setContador((prevContador) => {
                    let segundos = prevContador.segundos + 1;
                    let minutos = prevContador.minutos;
                    let horas = prevContador.horas;

                    if (segundos === 60) {
                        segundos = 0;
                        minutos++;
                    }
                    if (minutos === 60) {
                        minutos = 0;
                        horas++;
                    }

                    return { horas, minutos, segundos };
                });
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [contadorAtivo]);

    useEffect(() => {
        getTelemarketing().then((data) => {
            setClientes(data)
        }).catch((error) => {
            toast.error('Erro ao obter dados da api:' + error);
        });
    }, []);

    return (
        <>
            <div>

                <p><SupportAgentIcon /> Central de Relacionamento</p>
                <div className="pesquisa">
                    <input
                        placeholder="Pesquisar um cliente"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} />
                    <div className="button-pesquisa-associado">
                        <ButtonIcon
                            icon={<SearchIcon fontSize={"small"} />}
                            funcao={() => handlePesquisar('ct')} />
                    </div>
                    <div className="button-pesquisa-associado">
                        <ButtonText
                            title="Iniciar Filtro"
                            funcao={() => handlePesquisar('filtro')} />
                    </div>
                </div>
            </div>
            <div className="container-tele">
                {pesquisar ?
                    <></>
                    :
                    <TableComponent
                        headers={headerTele}
                        rows={clienteFiltrado}
                        actionsLabel={["Ações", "Acciones"]}
                        actionCalls={{
                            view: (e) => handleView(e)
                        }}
                    />

                }
                {openTele && (
                    <>
                        <Typography>
                            <div className="sidebar-cobranca">
                                <div className="cliente-cobran-nome">
                                    <div className="nomes-cobranca">
                                        <label>
                                            {currentCliente.nome} - CT: {currentCliente.contrato}
                                        </label>
                                        {/* <p>{cardData.titleResultado}</p> */}
                                    </div>
                                </div>
                                <div className="atender-clientes">
                                    <ButtonIconTextoStart
                                        corFundoBotao={contadorAtivo ? "red" : "#006b33"}
                                        title={contadorAtivo ? "ENCERRAR" : "ATENDER CLIENTE"}
                                        funcao={() => handleAtender()} />
                                </div>
                                <div className="contador-cobranca">
                                    <p>{`${formatTime(contador.horas)}:${formatTime(
                                        contador.minutos
                                    )}:${formatTime(contador.segundos)}`}</p>
                                </div>
                                {tipoTele === 'filtro' && clienteIndex < clienteFiltrado.length - 1 && (
                                    <div className="button-prox-cliente">
                                        <ButtonIcon
                                            icon={<ArrowForwardIosIcon fontSize={"small"} />}
                                            funcao={handleNextCliente}
                                        />
                                    </div>
                                )}
                            </div>
                        </Typography><Grid container spacing={1}>
                            <Grid item xs={8}>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    <div className="container-modal-cobran">
                                        <div className="dados-basico-cobran">
                                            <div className="infor-modal-cobrancas">
                                                <div className="origin-lead-cobran">
                                                    <div className="tipo-atendimento-cobran">
                                                        <div className="opcoes-modal-cobranca">
                                                            <button
                                                                className={mostrarFormularioCadastro ? "" : "botao-ativo"}
                                                                onClick={() => mostrarFormulario("cadastro")}
                                                            >
                                                                Titular
                                                            </button>
                                                            <button
                                                                className={mostrarFormularioContato ? "" : "botao-ativo"}
                                                                onClick={isAtendimento
                                                                    ? () => mostrarFormulario("contato")
                                                                    : mostrarMensagem}
                                                            >
                                                                Contatos
                                                            </button>

                                                            <button
                                                                className={mostrarFormularioPagamento ? "" : "botao-ativo"}
                                                                onClick={isAtendimento
                                                                    ? () => mostrarFormulario("pagamento")
                                                                    : mostrarMensagem}
                                                            >
                                                                Pagamentos
                                                            </button>

                                                            <button
                                                                className={mostrarFormularioDependente ? "" : "botao-ativo"}
                                                                onClick={isAtendimento
                                                                    ? () => mostrarFormulario("dependente")
                                                                    : mostrarMensagem}
                                                            >
                                                                Dependentes
                                                            </button>

                                                            <button
                                                                className={mostrarFormularioObservacao ? "" : "botao-ativo"}
                                                                onClick={isAtendimento
                                                                    ? () => mostrarFormulario("historico")
                                                                    : mostrarMensagem}
                                                            >
                                                                Historico Obs.
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Typography>
                                {mostrarFormularioCadastro && (
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <div className="container-modal-cobran">
                                            <div className="dados-basico-cobran2">
                                                <div className="infor-modal-cobrancas">
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<PersonOutlineOutlinedIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Genero</label>
                                                            <label>{currentCliente.dados_cliente.titular.sexo}</label>
                                                        </div>
                                                    </div>
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<CalendarMonthOutlinedIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Data Contrato</label>
                                                            <label>{currentCliente.data_contrato}</label>
                                                        </div>
                                                    </div>
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<GroupOutlinedIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Estado Civil</label>
                                                            <label>{currentCliente.dados_cliente.titular.estado_civil}</label>
                                                        </div>
                                                    </div>
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<PsychologyAltOutlinedIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Religião</label>
                                                            <label>{currentCliente.dados_cliente.titular.religiao}</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="infor-modal-cobrancas">
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<CalendarMonthOutlinedIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Data Nascimento</label>
                                                            <label>{currentCliente.dados_cliente.titular.data_nascimento}</label>
                                                        </div>
                                                    </div>
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<ContactPageOutlinedIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Plano</label>
                                                            <label>{currentCliente.plano}</label>
                                                        </div>
                                                    </div>
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<CurrencyExchangeIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Valor Plano</label>
                                                            <label>{currentCliente.valor_plano}</label>
                                                        </div>
                                                    </div>
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<CurrencyExchangeIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Valor Adicional</label>
                                                            <label>-</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="infor-modal-cobrancas">
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<CurrencyExchangeIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Valor Cremação</label>
                                                            <label>-</label>
                                                        </div>
                                                    </div>
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<CurrencyExchangeIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Valor PET</label>
                                                            <label>-</label>
                                                        </div>
                                                    </div>
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<PersonOutlineOutlinedIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Valor Total</label>
                                                            <label>90,00</label>
                                                        </div>
                                                    </div>
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<LocalAtmIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Bordero</label>
                                                            <label>Funcionario</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="infor-modal-cobrancas">
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<AddCardOutlinedIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Tipo</label>
                                                            <label>COBRADOR</label>
                                                        </div>
                                                    </div>
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<LocationOnOutlinedIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Rota</label>
                                                            <label>ESC</label>
                                                        </div>
                                                    </div>
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<CalendarMonthOutlinedIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Dia Vencimento</label>
                                                            <label>{currentCliente.dia_pagamento}</label>
                                                        </div>
                                                    </div>
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<DomainAddIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Status</label>
                                                            <label>Sem Carencia</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="container-modal-cobran">
                                            <div className="dados-basico-cobran2">
                                                <div className="infor-modal-cobrancas">
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<LocationOnOutlinedIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Endereço Residencial</label>
                                                            <label>
                                                                Rua Tal, Bairro Tal, nº 5, QD LT DOURADOS -MS
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="origin-lead-cobran">
                                                        <ButtonIconFundo
                                                            icon={<LocationOnOutlinedIcon fontSize={"small"} />} />
                                                        <div className="lead-origin-cobran">
                                                            <label>Endereço Comercial</label>
                                                            <label>
                                                                Rua Tal, Bairro Tal, nº 10, QD LT JARDIM -MS
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                )}
                                {mostrarFormularioContato && (
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <div className="container-modal-cobran">
                                            <div className="dados-basico-cobran2">
                                                <div className="infor-modal-cobrancas">
                                                    {currentCliente.dados_cliente.titular.contatos.map((item) => (
                                                        <div key={item.id} className="origin-lead-cobran">
                                                            <ButtonIconFundo
                                                                icon={<AddIcCallOutlinedIcon fontSize={"small"} />}
                                                            />
                                                            <div className="lead-origin-cobran">
                                                                <label>{item.tipo}</label>
                                                                <label>
                                                                    {item.tipo === "Telefone"
                                                                        ? formatarTelefone(item.valor)
                                                                        : item.valor}
                                                                </label>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                )}
                                {mostrarFormularioPagamento && (
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <div className="container-modal-cobran">
                                            <div className="dados-basico-cobran2">
                                                <div className="infor-modal-cobrancas">
                                                    <TableComponent
                                                        headers={headerExtrato}
                                                        rows={currentCliente.dados_cliente.pagamentos}
                                                        actionsLabel={["Ações", "Acciones"]}
                                                        actionCalls={{}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                )}
                                {mostrarFormularioDependente && (
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <div className="container-modal-cobran">
                                            <div className="dados-basico-cobran2">
                                                <div className="infor-modal-cobrancas">
                                                    <TableComponent
                                                        headers={headerDependente}
                                                        rows={currentCliente.dados_cliente.dependentes}
                                                        actionsLabel={["Ações", "Acciones"]}
                                                        actionCalls={{}}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                )}
                                {mostrarFormularioObservacao && (
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <div className="container-modal-cobran">
                                            <div className="dados-basico-cobran2">
                                                <div className="infor-modal-cobrancas">
                                                    <TableComponent
                                                        headers={headerObservacao}
                                                        rows={currentCliente.dados_cliente.observacao}
                                                        actionsLabel={["Ações", "Acciones"]}
                                                        actionCalls={{
                                                            view: (e) => handleOpen(e), // Certifique-se de que 'handleOpenModalHistorico' seja passado aqui
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Typography>
                                )}
                                <Modal
                                    open={openModal}
                                    onClose={handleClose2}
                                    aria-labelledby="child-modal-title"
                                    aria-describedby="child-modal-description"
                                >
                                    <Box sx={{ ...style, width: 500, height: 350 }}>
                                        <div className="historicof9">
                                            <div className="historicof9-close">
                                                <h1>
                                                    <ScheduleOutlinedIcon fontSize={"small"} />
                                                    Historico F9
                                                </h1>
                                            </div>
                                            <p>Informações</p>
                                            <div className="historicof9-campos">
                                                <div className="campos-tiposf9">
                                                    <label>Data</label>
                                                    <p>22/03/2024</p>
                                                </div>
                                                <div className="campos-tiposf92">
                                                    <label>Titulo</label>
                                                    <p>F9 Teste</p>
                                                </div>
                                                <div className="campos-tiposf9">
                                                    <label>Categoria</label>
                                                    <p>Negociação</p>
                                                </div>
                                            </div>
                                            <div className="historicof9-campos">
                                                <div className="campos-tiposf9">
                                                    <label>Subcategoria</label>
                                                    <p>22/03/2024</p>
                                                </div>
                                                <div className="campos-tiposf92">
                                                    <label>Usuário</label>
                                                    <p>F9 Teste</p>
                                                </div>
                                            </div>
                                            <div className="historicof9-campos">
                                                <div className="campos-tiposf923">
                                                    <label>Descrição</label>
                                                    <a></a>
                                                </div>
                                            </div>
                                        </div>
                                    </Box>
                                </Modal>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    <div className="icon-atividade-cobran">
                                        <label>Atendimento</label>
                                    </div>
                                    <div className="container-modal-cobran">
                                        <div className="dados-basico-cobran">
                                            <div className="infor-modal-cobrancas">
                                                <div className="obs-cobranca-dados">
                                                    <div className="container-linhas-cobran">
                                                        <div className="obs-cobran-lead">
                                                            <label>Inserir Observação</label>
                                                            <textarea
                                                                value={comentario}
                                                                onChange={handleComentarioChange}
                                                            ></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="add-comentario-cobran">
                                                        <ButtonText
                                                            title="Salvar"
                                                            funcao={""} />
                                                    </div>
                                                    <div className="atividade-cobranca">
                                                        <div className="campos-atividade-cobranca">
                                                            <div className="select-text-area-cobran">
                                                                <div className="icon-atividade-cobran">
                                                                    <ButtonIconFundo icon={<ChecklistIcon />} />
                                                                    <label>Tipo de Contato</label>
                                                                </div>
                                                                <select
                                                                    value={categoria}
                                                                    onChange={(e) => setCategoria(e.target.value)}
                                                                >
                                                                    <option value={null}>
                                                                        Selecione tipo de contato
                                                                    </option>
                                                                    <option value={1}>Ligação via Telefone</option>
                                                                    <option value={2}>Ligação via Whatsapp</option>
                                                                    <option value={3}>Mensagem via Whatsapp</option>
                                                                </select>
                                                                {categoria ? (
                                                                    <>
                                                                        <Switch
                                                                            checked={isAtendeu}
                                                                            onChange={() => setIsAtendeu(!isAtendeu)}
                                                                            name="conseguiuFalar"
                                                                            inputProps={{
                                                                                "aria-label": "conseguiu falar com o cliente",
                                                                            }} />
                                                                        <p>
                                                                            Conseguiu falar com o cliente?{" "}
                                                                            {isAtendeu ? "Sim" : "Não"}
                                                                        </p>
                                                                        <label>Tipo de Categoria</label>
                                                                        <select
                                                                            value={subcategoria}
                                                                            onChange={(e) => setSubCategoria(e.target.value)}
                                                                        >
                                                                            <option value={null}>
                                                                                Selecione tipo de contato
                                                                            </option>
                                                                            <option value={1}>
                                                                                Ligação via Telefone
                                                                            </option>
                                                                            <option value={2}>
                                                                                Ligação via Whatsapp
                                                                            </option>
                                                                            <option value={3}>
                                                                                Mensagem via Whatsapp
                                                                            </option>
                                                                        </select>
                                                                    </>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                                {isAtendimento ? (
                                                                    <>
                                                                        <div className="add-comentario-cobran">
                                                                            <ButtonText
                                                                                title={"GRAVAR"}
                                                                                funcao={adicionarComentario} />
                                                                        </div>
                                                                    </>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Typography>
                            </Grid>
                        </Grid>
                    </>

                )}
            </div>
        </>
    );
};

export default Telemarketing;
