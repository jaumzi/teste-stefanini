import { BaseModel } from "../base/BaseModel";
import { DadosDomicilioBancarioModel } from "./DadosDomicilioBancarioModel";

export type LancamentoContaCorrenteClienteModel = {
  numeroRemessaBanco: number,
  nomeSituacaoRemessa: string,
  dadosDomicilioBancario: DadosDomicilioBancarioModel,
  nomeTipoOperacao: string
} & BaseModel;
