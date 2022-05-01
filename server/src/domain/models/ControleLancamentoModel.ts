import { BaseModel } from "./BaseModel"
import { LancamentoContaCorrenteClienteModel } from "./LancamentoContaCorrenteClienteModel"

export type ControleLancamentoModel = {
  lancamentoContaCorrenteCliente: LancamentoContaCorrenteClienteModel,
  dataEfetivaLancamento: string,
  dataLancamentoContaCorrenteCliente: string,
  numeroEvento: number,
  descricaoGrupoPagamento: string,
  codigoIdentificadorUnico: number,
  nomeBanco: string,
  quantidadeLancamentoRemessa: number,
  numeroRaizCNPJ: number,
  numeroSufixoCNPJ: number,
  valorLancamentoRemessa: number,
  dateLancamentoContaCorrenteCliente: number,
  dateEfetivaLancamento: number
} & BaseModel;
