import fs from 'fs';

type SystemParamsProps = {
  salt: string,
  jwt: string,
  nameProject: string,
  emailAddress: string,
  emailPassword: string
} | undefined

class Params {
  protected params: SystemParamsProps = undefined;

  async load() {
    const fileData = await fs.promises.readFile(__dirname +'../config/configs.json', 'utf8');
    const result = JSON.parse(fileData);
    this.params = result;
  }

  getParams (): SystemParamsProps | null {
    return this.params;
  }
}

// singleton evitar problemas com performance ;)
let instance: Params | undefined = undefined;

export const SystemParams = async () => {
  if(!instance){
    instance = new Params();
    await instance.load();
  }

  const params = instance.getParams();
  if(!params){
    throw new Error("Falha ao carregar parametros de sistema!");
  }

  return params;
}
