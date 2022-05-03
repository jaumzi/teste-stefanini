import { BaseModel } from "./BaseModel";

export type DadosDomicilioBancarioModel = {
  codigoBanco: number,
  numeroAgencia: number,
  numeroContaCorrente: number,
} & BaseModel;
