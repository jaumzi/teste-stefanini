import { Request, Response } from "express";
import ContaLegadoRepository from "../domain/repositories/ContaLegadoRepository";

const contaLegadoRepository = new ContaLegadoRepository();

export const getAll = async (req: Request, res: Response) => {
  const data = await contaLegadoRepository.GetAll();

  data.tamanhoPagina = 25;
  data.totalElements = data.listaControleLancamento.length;
  data.totalControleLancamento.quantidadeLancamentos = data.listaControleLancamento.filter(item => item.lancamentoContaCorrenteCliente.nomeSituacaoRemessa === "Pago").length;
  data.totalControleLancamento.quantidadeRemessas = data.listaControleLancamento.length - data.totalControleLancamento.quantidadeLancamentos;

  data.listaControleLancamento.forEach(item => {
    data.totalControleLancamento.valorLancamentos += item.valorLancamentoRemessa;
  })

  return res.status(200).json(data);
}
