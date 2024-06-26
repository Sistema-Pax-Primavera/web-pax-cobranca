import { converterData, formatCPF, formatarValor } from "../../utils/fuctions";

export const CRM = (data) => ({
  id: data?.id,
  nome: data?.nome,
  contrato: data?.contrato,
  data_contrato: converterData(data?.dataContrato),
  ultimo_pagamento: converterData(data?.ultimoPagamento),
  ultimo_mes_pago: converterData(data?.ultimoMesPago),
  dia_pagamento: data?.diaPagamento,
  plano: data?.plano,
  plano_id: data?.planoId,
  valor_plano: formatarValor(data?.valorPlano),
  valor_em_aberto: formatarValor(data?.valorEmAberto),
  rota_id: data?.rotaId,
  rota: data?.rota,
  dados_cliente: {
    titular: {
      cpf: data?.dadosCliente?.titular?.cpf,
      rg: data?.dadosCliente?.titular?.rg,
      sexo: data?.dadosCliente?.titular?.sexo,
      estado_civil: data?.dadosCliente?.titular?.estadoCivil,
      data_nascimento: converterData(data?.dadosCliente?.titular?.dataNascimento),
      religiao: data?.dadosCliente?.titular?.religiao,
      contatos: data?.dadosCliente?.titular?.contatos.map((contato) => ({
        id: contato?.id,
        tipo: contato?.tipo,
        valor: contato?.valor,
      })),
    },
    dependentes: data?.dadosCliente?.dependentes.map((dependente) => ({
      nome: dependente?.nome,
      data_nascimento: converterData(dependente?.dataNascimento),
      data_falecimento: converterData(dependente?.dataFalecimento),
      data_filiacao: converterData(dependente?.dataFiliacao),
      data_inicio_carencia: converterData(dependente?.dataInicioCarencia),
      data_fim_carencia: converterData(dependente?.dataFimCarencia),
      parentesco: dependente?.parentesco,
      cpf: formatCPF(dependente?.cpf),
      tipo: dependente?.tipo == 1 ? "Humano" : "PET",
      valor_adicional: dependente?.valorAdicional,
      resgate: dependente?.resgate,
      cremacao: dependente?.cremacao,
    })),
    pagamentos: data?.dadosCliente?.pagamentos?.map((pagamento) => ({
      mes: converterData(pagamento?.mesPago),
      data_pagamento: converterData(pagamento?.dataPagamento),
      status: pagamento?.status,
      valor: formatarValor(pagamento?.valor),
      local_pagamento: pagamento?.localPagamento,
    })),
    observacao: data?.dadosCliente?.historico?.map((historico) => ({
      data_criacao: converterData(historico?.dataCriacao),
      titulo: historico?.titulo,
      categoria: historico?.categoria,
      id_categoria: historico?.categoriaId,
      subcategoria: historico?.subCategoria,
      usuario: historico?.usuario,
      descricao: historico.descricao
    })),
    agendamentos: data?.dadosCliente?.agendamentos?.map((agendamento) => ({
      id: agendamento.id,
      ult_agendamento_cob: converterData(agendamento?.UltAgCob),
      ult_agendamento_tel: converterData(agendamento?.UltAgTel),
      ult_justificativa: converterData(agendamento?.UltJustificativa),
      id_justificativa: agendamento?.IdJustificativa,
      motivo_justificativa: agendamento?.MotivoJustificativa,
      observacao: agendamento.Observacao
    })),
  },
});
