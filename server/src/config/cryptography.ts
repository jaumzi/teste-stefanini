import { SystemParams } from "../utils/SystemParams";
import crypto from 'crypto';

export const encrypt = async (pass: string) => {
  const params = await SystemParams();
  let result = crypto.pbkdf2Sync(pass, params.salt, 100000, 512, 'sha512');
  return result.toString('hex');
}
