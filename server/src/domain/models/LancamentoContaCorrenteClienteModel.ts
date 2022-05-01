import { BaseModel } from "./BaseModel";

export type LancamentoContaCorrenteClienteModel = {
  numeroRemessaBanco: number,
  nomeSituacaoRemessa: string,
  dadosDomicilioBancario: {
    codigoBanco: number,
    numeroAgencia: number,
    numeroContaCorrente: number,
  },
  nomeTipoOperacao: string
} & BaseModel;
