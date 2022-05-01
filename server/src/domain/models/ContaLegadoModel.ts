import { BaseModel } from "./BaseModel";
import { ControleLancamentoModel } from "./ControleLancamentoModel";

export type ContaLegadoModel = {
  totalControleLancamento: {
    quantidadeLancamentos: number,
    quantidadeRemessas: number,
    valorLancamentos: number
  },
  listaControleLancamento: ControleLancamentoModel[],
  indice: number,
  tamanhoPagina: number,
  totalElements: number,
} & BaseModel;
