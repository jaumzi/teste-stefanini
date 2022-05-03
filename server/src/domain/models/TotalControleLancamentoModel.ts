import { BaseModel } from "./BaseModel";

export type TotalControleLancamentoModel = {
  quantidadeLancamentos: number,
  quantidadeRemessas: number,
  valorLancamentos: number
} & BaseModel;
