import { BaseModel } from "./BaseModel";
import { ControleLancamentoModel } from "./ControleLancamentoModel";
import { TotalControleLancamentoModel } from "./TotalControleLancamentoModel";

export type ContaLegadoModel = {
  totalControleLancamento: TotalControleLancamentoModel,
  listaControleLancamento: ControleLancamentoModel[],
  indice: number,
  tamanhoPagina: number,
  totalElements: number,
} & BaseModel;
