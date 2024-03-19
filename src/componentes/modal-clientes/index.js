import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./modal-clientes.css";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ButtonText from "../../../../pax-associado/src/components/button-texto";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ButtonIconFundo from "../../../../pax-associado/src/components/button-icon-sem-fundo/index";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import PersonIcon from "@mui/icons-material/Person";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SellIcon from "@mui/icons-material/Sell";
import AttachmentIcon from "@mui/icons-material/Attachment";
import IconeButtonTable from "../../../../pax-associado/src/components/button-icon-texto";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ChecklistIcon from "@mui/icons-material/Checklist";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ButtonIconRed from "../../../../pax-associado/src/components/button-icon-red";
import ModalPequena from "../../componentes/modal-pequena/index";
import Checkbox from "@mui/material/Checkbox";
import CallIcon from "@mui/icons-material/Call";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ButtonIconTextoStart from "../button-icon-texto-start";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import DeleteIcon from "@mui/icons-material/Delete";
import GetAppIcon from "@mui/icons-material/GetApp";
import Calendar from "react-calendar";
import Switch from "@mui/material/Switch";
import "react-calendar/dist/Calendar.css";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

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

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ModalClientes = ({
  open,
  openModal,
  onClose,
  onCloseModal,
  cardData,
  icon,
  title,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [atividade, setAtividade] = useState("");
  const [comentario, setComentario] = useState("");
  const [historico, setHistorico] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isModalUsuario, setIsModalUsuario] = useState(false);
  const [contatos, setContatos] = useState([]);
  const [tipoContato, setTipoContato] = useState("");
  const [numeroContato, setNumeroContato] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = React.useState(null);
  const [mostrarCalendario, setMostrarCalendario] = useState(false);
  const [mostrarVendedor, setMostrarVendedor] = useState(false);

  const toggleMostrarVendedor = () => {
    setMostrarVendedor(!mostrarVendedor);
  };

  const toggleMostrarCalendario = () => {
    setMostrarCalendario(!mostrarCalendario);
  };

  const handleFileChange2 = (event) => {
    setSelectedFile2(event.target.files[0]);
  };

  const handleDeleteFile2 = () => {
    setSelectedFile2(null);
  };

  const handleDownloadFile = () => {
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", selectedFile.name);
      document.body.appendChild(link);
      link.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSave = () => {
    // Aqui você pode implementar a lógica para salvar o arquivo
    console.log("Arquivo salvo:", selectedFile);
  };

  const handleDelete = () => {
    // Aqui você pode implementar a lógica para excluir o arquivo
    setSelectedFile(null);
  };

  const handleAtividadeChange = (event) => {
    setAtividade(event.target.value);
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

  const handleOpenModalUsuario = () => {
    setIsModalUsuario(true);
  };

  const handleCloseModalUsuario = () => {
    setIsModalUsuario(); // Alterado para false
  };

  const handleOpenModaEtiqueta = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    // Execute as ações necessárias para fechar a modal
    setIsModalOpen(false); // Por exemplo, fechar a modal interna se necessário
    onCloseModal(); // Chamando a função passada como propriedade para fechar a modal
  };

  const handleClose2 = () => {
    setModalOpen(false);
    if (typeof onCloseModal === "function") {
      onCloseModal(); // Chamando a função de fechamento da modal, se necessário
    }
  };

  const handleClose = () => {
    onClose();
  };

  const adicionarContato = () => {
    if (tipoContato && numeroContato) {
      const novoContato = {
        id: Date.now(), // Usando a data atual como ID único (pode ser melhorado)
        tipo: tipoContato,
        numero: numeroContato,
      };
      setContatos([...contatos, novoContato]);
      // Limpa os campos após adicionar o contato
      setTipoContato("");
      setNumeroContato("");
    }
  };

  const excluirContato = (id) => {
    const novosContatos = contatos.filter((contato) => contato.id !== id);
    setContatos(novosContatos);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography>
          <div className="sidebar-cobranca">
            <div className="cliente-cobran-nome">
              <div className="close-modal-cobran">
                <ButtonIconRed
                  funcao={handleClose}
                  icon={<HighlightOffIcon />}
                />
              </div>
              <div className="nomes-cobranca">
                <label>{cardData.titleNome}</label>
                <p>{cardData.titleResultado}</p>
              </div>
            </div>
            <div className="atender-clientes-cobranca">
              <ButtonText title={"ATENDER CLIENTE"} />
            </div>
            <div className="like-deslike-atendimento">
              <div className="like-atendimento">
                <ThumbUpIcon fontSize="medium" />
              </div>
              <div className="deslike-atendimento">
                <ThumbDownIcon fontSize="medium" />
              </div>
            </div>
          </div>
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="container-modal-cobran">
            <div className="dados-basico-cobran">
              <div className="alert-dados-basico-cobran">
                <ButtonIconFundo
                  icon={<ErrorOutlineIcon />}
                  funcao={isModalUsuario}
                />
                <label>Dados Básico</label>

                <ModalPequena
                  icon={<ModeEditOutlineIcon />}
                  corTextoBotao="#006b33"
                  width="500px"
                  openModal={modalOpen}
                  onCloseModal={handleClose2}
                  conteudo={
                    <div className="edit-dados-cobran">
                      <label>Editar dados do cliente</label>
                      <div className="nome-cliente-cobran">
                        <label>Nome</label>
                        <input></input>
                      </div>
                      <div className="contato-por-cobran">
                        <label>O cliente deseja contato por:</label>
                        <div className="tel-whats-cobra">
                          <Checkbox {...label} />
                          <label>Telefone</label>
                          <Checkbox {...label} />
                          <label>WhatsApp</label>
                        </div>
                      </div>
                      <div className="estado-mun-cobran">
                        <div className="estado1-mun">
                          <label>Estado</label>
                          <select></select>
                        </div>
                        <div className="estado2-mun">
                          <label>Município</label>
                          <select></select>
                        </div>
                      </div>
                      <div className="salva-cancel-cobran">
                        <div className="salva-cancel-cobran2">
                          <ButtonText title={"SALVAR"} />
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
              <div className="infor-modal-cobrancas">
                <div className="origin-lead-cobran">
                  <ButtonIconFundo
                    icon={<AddLocationIcon fontSize={"small"} />}
                  />
                  <div className="lead-origin-cobran">
                    <label>Origem do Lead</label>
                    <label>Indicacao</label>
                  </div>
                </div>

                <div className="origin-lead-cobran">
                  <ButtonIconFundo icon={<PersonIcon fontSize={"small"} />} />
                  <div className="lead-origin-cobran">
                    <label>Responsavel Atual</label>
                    <label>{cardData.titleIndicacao}</label>
                  </div>
                </div>

                <div className="origin-lead-cobran">
                  <ButtonIconFundo
                    icon={<DomainAddIcon fontSize={"small"} />}
                  />
                  <div className="lead-origin-cobran">
                    <label>Unidade Atual</label>
                    <label>MS</label>
                  </div>
                </div>
              </div>
              <div className="infor-modal-cobrancas">
                <div className="origin-lead-cobran">
                  <ButtonIconFundo
                    icon={<DomainAddIcon fontSize={"small"} />}
                  />
                  <div className="lead-origin-cobran">
                    <label>Cidade/UF</label>
                    <label>Dourados/MS</label>
                  </div>
                </div>

                <div className="origin-lead-cobran">
                  <ButtonIconFundo icon={<ThumbUpIcon fontSize={"small"} />} />
                  <div className="lead-origin-cobran">
                    <label>Indicado por </label>
                    <label>Televendas</label>
                  </div>
                </div>

                <div className="origin-lead-cobran">
                  <ButtonIconFundo
                    icon={<CreditScoreIcon fontSize={"small"} />}
                  />
                  <div className="lead-origin-cobran">
                    <label>Possui Plano?</label>
                    <label>Não Informado</label>
                  </div>
                </div>
              </div>
              <div className="tipo-atendimento-cobran">
                <label>O cliente deseja contato pelos seguintes meios:</label>
                <div className="aten-whatsapp">
                  <ButtonIconFundo icon={<WhatsAppIcon fontSize={"small"} />} />
                  <label>WhatsApp</label>
                </div>
              </div>

              <div className="dados-contato-cobran">
                <div className="container-linhas-cobranças2">
                  <ButtonIconFundo
                    icon={<ContactPhoneIcon fontSize={"small"} />}
                  />
                  <label>Dados para Contato</label>

                  <ModalPequena
                    icon={<ModeEditOutlineIcon fontSize={"small"} />}
                    openModal={modalOpen}
                    onCloseModal={handleClose2}
                    width="400px"
                    corTextoBotao="#006b33"
                    conteudo={
                      <div className="add-contato-cobran">
                        <div className="call-add-pro">
                          <label>
                            {" "}
                            <CallIcon />
                            Informações Adicionais de Contato
                          </label>
                        </div>

                        <div className="estado-mun-cobran">
                          <div className="estado3-mun">
                            <label>Tipo</label>
                            <select
                              value={tipoContato}
                              onChange={(e) => setTipoContato(e.target.value)}
                            >
                              <option value="">Selecione...</option>
                              <option value="Celular">Celular</option>
                              <option value="Fixo">Fixo</option>
                            </select>
                          </div>
                          <div className="estado2-mun">
                            <label>Número</label>
                            <input
                              value={numeroContato}
                              onChange={(e) => setNumeroContato(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="espaco-contatos">
                          {contatos.map((contato) => (
                            <div key={contato.id}>
                              <div className="cell-delet-cobran">
                                <div className="icon-cell-cobranca">
                                  <ButtonIconFundo
                                    icon={
                                      <PhoneAndroidIcon fontSize={"small"} />
                                    }
                                  />
                                </div>

                                <label>
                                  {contato.tipo}: {contato.numero}
                                </label>
                                <div className="icon-cell-cobranca">
                                  <ButtonIconFundo
                                    icon={<DeleteForeverIcon />}
                                    funcao={() => excluirContato(contato.id)}
                                  >
                                    Remover
                                  </ButtonIconFundo>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="salva-cancel-cobran">
                          <div className="salva-cancel-cobran2">
                            <ButtonText
                              title={"ADICIONAR"}
                              funcao={adicionarContato}
                            />
                          </div>
                        </div>
                      </div>
                    }
                  />
                </div>
                <p>{cardData.numeroTelefone}</p>
              </div>

              <div className="dados-contato-cobran">
                <div className="container-linhas-cobran2">
                  <ButtonIconFundo icon={<CalendarMonthIcon />} />
                  <label>Agenda de Tarefas</label>
                  <div className="agenda-etiqueta-cobran">
                    <ButtonIconFundo
                      icon={<BookmarkAddIcon fontSize={"small"} />}
                    />
                  </div>
                </div>
                <div className="tarefa-data-cobran">
                  <ModalPequena
                    title={"25"}
                    corFundoBotao="#D9D9D9"
                    width="500px"
                    corTextoBotao="#FF0000"
                    fontWeightBotao="700"
                    height="500px"
                    fontSizeBotao="50px"
                    overflow="auto"
                    openModal={modalOpen}
                    onCloseModal={handleClose2}
                    conteudo={
                      <div className="tarefa-agendada-cobran">
                        <h1>Tarefa Agendada</h1>
                        <Calendar />
                        <div className="linha-calendarios-cobran">
                          <div className="horario-cliente-cobran">
                            <label>Categoria</label>
                            <input></input>
                          </div>
                          <div className="horario-cliente-cobran">
                            <label>Cliente</label>
                            <input></input>
                          </div>
                        </div>
                        <div className="linha-calendarios-cobran">
                          <div className="horario-cliente-cobran">
                            <label>Horário</label>
                            <input></input>
                          </div>
                          <div className="horario-cliente-cobran">
                            <label>Usúario que agendou</label>
                            <input></input>
                          </div>
                        </div>
                        <div className="linha-calendarios-cobran4">
                          <label>Descrição</label>
                          <textarea></textarea>
                        </div>
                        <div className="fecha-modal-tarefa-cobra">
                              <ButtonText title={"FECHAR"}></ButtonText>
                            </div>
                      </div>
                    }
                  />
                  <div className="tipos-status-cobran">
                    <ButtonIconFundo icon={<AddIcCallIcon fontSize={"10"} />} />
                    <label>Retorno de Contato</label>
                  </div>
                </div>
              </div>

              <div className="dados-contato-cobran">
                <div className="container-anexos-cobran">
                  <div className="container-linhas-cobran2">
                    <ButtonIconFundo icon={<AttachFileIcon />} />
                    <label>Anexos</label>
                  </div>

                  <div className="container-linhas-dowload-cobran">
                    <div className="tipos-arquivos-anexos">
                      <PlagiarismIcon fontSize={"large"} />
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        color="success"
                        startIcon={<CloudUploadIcon />}
                        style={{ backgroundColor: "#006b33", color: "white" }}
                      >
                        <div className="selecione-arquivo-cobran">
                          <label>
                            <VisuallyHiddenInput
                              type="file"
                              fontSize={"small"}
                              onChange={handleFileChange2}
                            />
                            Selecione Arquivo
                          </label>
                        </div>
                      </Button>
                    </div>
                    {selectedFile2 && (
                      <div className="tipos-arquivos-anexos2">
                        <a>{selectedFile2.name}</a>
                        <div className="download-delet-cobran">
                          <ButtonIconTextoStart
                            icon={<DeleteIcon />}
                            corTextoBotao="#FF0000"
                            funcao={handleDeleteFile2}
                            alinhamentoBotao="center"
                          />
                          <ButtonIconTextoStart
                            corTextoBotao="#006b33"
                            icon={<GetAppIcon />}
                            alinhamentoBotao="center"
                            funcao={handleDownloadFile}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="obs-cobranca-dados">
              <div className="container-linhas-cobran">
                <div className="acoes-cobranca">
                  <label>Ações</label>
                  <div className="button-acoes-cobran">
                    <div className="icon-buton-cobran">
                      <ModalPequena
                        icon={<CalendarMonthIcon fontSize="small" />}
                        title={"AGENDAR"}
                        corFundoBotao="#006b33"
                        width="500px"
                        corTextoBotao="#ffff"
                        fontWeightBotao="800"
                        height="500px"
                        fontSizeBotao="10px"
                        overflow="auto"
                        openModal={modalOpen}
                        onCloseModal={handleClose2}
                        conteudo={
                          <div className="calendar-cobran">
                            <Calendar />
                            <div className="linha-calendarios-cobran">
                              <div className="data-clock-cobran">
                                <Switch
                                  onChange={toggleMostrarCalendario}
                                  checked={mostrarCalendario}
                                />
                                <label>Adicionar data e hora fim</label>
                              </div>

                              <div className="horario-calenda-cobran">
                                <label>Horário</label>
                                <input></input>
                              </div>
                            </div>
                            {mostrarCalendario && <Calendar />}
                            <div className="linha-calendarios-cobran">
                              <div className="horario-calenda-cobran">
                                <label>Categoria</label>
                                <select></select>
                              </div>
                              <div className="data-clock-cobran">
                                <Switch
                                  onChange={toggleMostrarVendedor}
                                  checked={mostrarVendedor}
                                />
                                <label>Agendar para outro vendedor</label>
                              </div>
                            </div>
                            {mostrarVendedor && (
                              <div className="horario-calenda-cobran3">
                                <label>Vendedor</label>
                                <select></select>
                              </div>
                            )}

                            <div className="linha-calendarios-cobran4">
                              <label>Descrição</label>
                              <textarea></textarea>
                            </div>
                            <div className="linha-calendarios-cobran">
                              <ButtonText title="SALVAR"></ButtonText>
                            </div>
                          </div>
                        }
                      />
                    </div>
                    <div className="icon-buton-cobran">
                      <ModalPequena
                        icon={<SellIcon fontSize="small" />}
                        title={"ETIQUETAS"}
                        corFundoBotao="#006b33"
                        width="300px"
                        corTextoBotao="#ffff"
                        fontWeightBotao="800"
                        fontSizeBotao="10px"
                        openModal={modalOpen}
                        onCloseModal={handleClose2}
                        conteudo={
                          <div className="tamanho-modal-pequena-cobran">
                            <h1>ETIQUETAS</h1>
                            <div className="uni-cobran3">
                              <label>Selecione</label>
                              <select></select>
                            </div>
                            <div className="uni-equipe-cobran-buttons">
                              <ButtonText title={"TRANSFERIR"}></ButtonText>
                            </div>
                          </div>
                        }
                      />
                    </div>
                    <div className="icon-buton-cobran">
                      <ModalPequena
                        icon={<AttachmentIcon fontSize="small" />}
                        title={"ANEXOS"}
                        corFundoBotao="#006b33"
                        corTextoBotao="#ffff"
                        fontWeightBotao="800"
                        width="300px"
                        fontSizeBotao="10px"
                        openModal={modalOpen}
                        onCloseModal={handleClose2}
                        conteudo={
                          <div className="tamanho-modal-pequena-cobran">
                            <h1>Anexar Documento</h1>
                            <div className="uni-equipe-cobran">
                              <div className="uni-cobran2">
                                <label>Selecione:</label>
                                <Button
                                  component="label"
                                  role={undefined}
                                  color="success"
                                  variant="contained"
                                  tabIndex={-1}
                                  startIcon={<CloudUploadIcon />}
                                >
                                  Adicionar Arquivo
                                  <VisuallyHiddenInput type="file" />
                                </Button>
                                <div className="uni-equipe-cobran-buttons">
                                  <ButtonText title={"TRANSFERIR"}></ButtonText>
                                </div>
                              </div>
                              <div></div>
                            </div>
                          </div>
                        }
                      />
                    </div>
                    <div className="icon-buton-cobran">
                      <ModalPequena
                        icon={<CompareArrowsIcon fontSize="small" />}
                        title={"TRANSFERIR"}
                        corFundoBotao="#006b33"
                        width="500px"
                        corTextoBotao="#ffff"
                        fontWeightBotao="800"
                        fontSizeBotao="10px"
                        openModal={modalOpen}
                        onCloseModal={handleClose2}
                        conteudo={
                          <div className="tamanho-modal-pequena-cobran">
                            <h1>Transferir Oportunidade</h1>
                            <div className="uni-equipe-cobran">
                              <div className="uni-cobran">
                                <label>Unidade</label>
                                <select></select>
                              </div>
                              <div className="uni-cobran">
                                <label>Equipe</label>
                                <select></select>
                              </div>
                            </div>
                            <div className="uni-equipe-cobran">
                              <div className="uni-cobran">
                                <label>Coluna</label>
                                <select></select>
                              </div>
                              <div className="uni-cobran">
                                <label>Vendedor</label>
                                <select></select>
                              </div>
                            </div>

                            <div className="uni-equipe-cobran-buttons">
                              <ButtonText title={"TRANSFERIR"}></ButtonText>
                            </div>
                          </div>
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="obs-cobran-lead">
                  <label>Observações desse Lead</label>
                  <textarea></textarea>
                </div>
              </div>

              <div className="atividade-cobranca">
                <div className="icon-atividade-cobran">
                  <ButtonIconFundo icon={<ChecklistIcon />} />
                  <label>Atividade</label>
                </div>
                <div className="campos-atividade-cobranca">
                  <ButtonIconFundo icon={<AccountCircleIcon />} />
                  <div className="select-text-area-cobran">
                    <select value={atividade} onChange={handleAtividadeChange}>
                      <option value="">Selecione</option>
                      <option value="Tentativa de Contato">
                        Tentativa de Contato
                      </option>
                      <option value="Venda Agendada">Venda Agendada</option>
                      <option value="Venda Concluída">Venda Concluída</option>
                      <option value="Em Contato(Negociação)">
                        Em Contato(Negociação)
                      </option>
                    </select>
                    <textarea
                      value={comentario}
                      onChange={handleComentarioChange}
                    ></textarea>
                    <div className="add-comentario-cobran">
                      <ButtonText
                        title={"ADICIONAR"}
                        funcao={adicionarComentario}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="historico-cobranca-comentarios">
                <div className="diversos-comentarios-cobran">
                  {historico.map((item, index) => (
                    <div key={index} className="tipos-comentarios-cobran">
                      <div className="comentario2-cobranca">
                        <p>
                          {" "}
                          {item.atividade} - {item.dataHora}
                        </p>
                        <label>{item.comentario} </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalClientes;
