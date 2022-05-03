import { readFile } from "fs/promises";
import { ContaLegadoModel } from "../models/ContaLegadoModel";

export default class ContaLegadoRepository {
  constructor() {
  }

  GetAll(): Promise<ContaLegadoModel> {
      return new Promise(async (resolve, reject) => {
        const fileData = await readFile(__dirname +'../../../../resources/inMemoryDB/ContaLegadoInMemoryData.json', 'utf8');
        if(!fileData) {
          reject('Erro ao carregar arquivo!');
        }

        const result = JSON.parse(fileData);
        if(!result) {
          reject('Erro ao carregar os dados do arquivo!');
        }

        resolve(result);
      })
  }
}
