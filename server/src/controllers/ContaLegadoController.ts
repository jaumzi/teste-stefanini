import { Request, Response } from "express";
import ContaLegadoRepository from "../domain/repositories/ContaLegadoRepository";

const contaLegadoRepository = new ContaLegadoRepository();

export const getAll = async (req: Request, res: Response) => {
  const data = await contaLegadoRepository.GetAll();
  return res.status(200).json(data);
}
