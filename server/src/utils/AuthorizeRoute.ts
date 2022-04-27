import { NextFunction, Request, Response } from "express";
import { EnumPermissions } from "../config/constants/EnumPermission";

const VerifyPermission = require('./VerifyPermission');
const EnumCookies = require('./EnumCookies');

export const AuthorizeRoute = async (req: Request, res: Response, next: NextFunction, permissions?: EnumPermissions[]) => {
  const token = req.cookies[EnumCookies.USER] || req.headers[EnumCookies.USER];
  const data = await VerifyPermission.getDataInJWT(token);

  console.log(data);

  if (!data) {
    return res
      .status(400)
      .json({ error: 'Você não tem permissão para acessar!' });
  }

  const { id } = data;
  if (!id) {
    return res
      .status(400)
      .json({ error: 'Você não tem permissão para acessar!' });
  }

  // const currentUser = await VerifyPermission.userAccess(id, permissions);
  // if (!currentUser) {
  //   return res
  //     .status(400)
  //     .json({ error: 'Você não tem permissão para acessar!' });
  // }

  // req['currentUser'] = currentUser;
  next();
}
