import { SystemParams } from "./SystemParams";
import jwt from 'jsonwebtoken';
import { UserRepository } from "../repositories/UserRepository";

// const UserService = require('../services/UserService');
// const { User } = require('../db/models');

// const userService = new UserRepository(User);

// export const userLogged = async (email: string, password: string) => {
//   if (!email || !password) {
//     return undefined;
//   }

//   const user = await userService.GetCompleteByEmail(email);
//   if (!user || user.password !== password) {
//     return undefined;
//   }

//   return user;
// }

export const userAccess = async (id: string, permissions: string[] = []) => {
  if (!id) {
    return undefined;
  }

  // const currentUser = await userService.GetCompleteById(id);

  // if (!currentUser || (permissions.length > 0  && !permissions.includes(currentUser.permission))) {
  //   return undefined;
  // }

  // return currentUser;
};

export const getDataInJWT = async (token: string) => {
  const params = await SystemParams();

  return jwt.verify(token, params.jwt, async function(err, decoded) {
    if (err) {
      return undefined;
    }

    return decoded;
  });
};
