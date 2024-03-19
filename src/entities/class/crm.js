export const CRM = (data) => ({
  id: data?.id,
  nome: data?.nome,
  data_contrato: data?.datacontrato,
  ultimo_pagamento: data?.ultimopagamento,
  ultimo_mes_pago: data?.ultimomespago,
  plano: data?.plano,
  plano_id: data?.planoId,
  valor_plano: data?.valorPlano,
  dados_cliente: data?.dadosCliente.map((item) => ({
    titular: {
      cpf: item?.titular?.cpf,
      rg: item?.titular?.rg,
      sexo: item?.titular?.sexo,
      data_nascimento: item?.titular?.dataNascimento,
      contatos: {
        id: item?.titular?.contatos?.id,
        tipo: item?.titular?.contatos?.tipo,
        valor: item?.titular?.contatos?.valor,
      },
    },
    dependentes: {
      nome: item?.dependentes?.nome,
      parentesco: item?.dependentes?.parentesco,
      cpf: item?.dependentes?.cpf,
    },
    pagamentos: {
      mes: item?.pagamentos?.mes,
      status: item?.pagamentos?.status,
      valor: item?.pagamentos?.valor,
    },
  })),
  usuario: data?.usuario,
  senha: data?.senha,
  idioma: data?.idioma,
  token: data?.token,
});
