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
      data_filiacao: converterData(dependente?.dataFiliacao),
      data_inicio_carencia: converterData(dependente?.dataInicioCarencia),
      data_fim_carencia: converterData(dependente?.dataFimCarencia),
      parentesco: dependente?.parentesco,
      cpf: formatCPF(dependente?.cpf),
    })),
    pagamentos: data?.dadosCliente?.pagamentos?.map((pagamento) => ({
      mes: pagamento?.mesPago,
      data_pagamento: converterData(pagamento?.dataPagamento),
      status: pagamento?.status,
      valor: pagamento?.valor,
      local_pagamento: pagamento?.localPagamento,
    })),
    observacao: data?.dadosCliente?.historico?.map((historico) => ({
      data_criacao: converterData(historico?.dataCriacao),
      titulo: historico?.titulo,
      categoria: historico?.categoria,
      subcategoria: historico?.subCategoria,
      usuario: historico?.usuario,
      descricao: historico.descricao
    })),
  },
});
