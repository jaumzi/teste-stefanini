import { ContaLegadoModel } from "../models/ContaLegadoModel";
import { Entity } from "./Entity";

export class ContaLegadoEntity extends Entity<ContaLegadoModel> {
  private constructor(props: ContaLegadoModel, _id?: string){
    super(props, _id);
  }

  static create(props: ContaLegadoModel, _id?: string) {
    const contaLegado = new ContaLegadoEntity(props, _id);

    return contaLegado;
  }
}
