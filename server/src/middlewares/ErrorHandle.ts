import { NextFunction, Request, Response } from "express";
import { isDevelopment } from "../config/constants/Constants";

export function errorHandle(err: Error, req: Request, res: Response, next: NextFunction) {
  if (isDevelopment) {
    console.error(err.stack); // logg error
  }

  if (res.headersSent) { // https://expressjs.com/pt-br/guide/error-handling.html veja "O Manipulador de Erros Padrão"
    return next(err);
  }

  return res.status(500).render('error', { error: err });
}
