import { BaseModel } from "../base/BaseModel";


export type TotalControleLancamentoModel = {
  quantidadeLancamentos: number,
  quantidadeRemessas: number,
  valorLancamentos: number
} & BaseModel;
