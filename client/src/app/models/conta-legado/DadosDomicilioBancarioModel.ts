import { BaseModel } from "../base/BaseModel";


export type DadosDomicilioBancarioModel = {
  codigoBanco: number,
  numeroAgencia: number,
  numeroContaCorrente: number,
} & BaseModel;
