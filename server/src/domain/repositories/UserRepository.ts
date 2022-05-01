// import { User } from "../models/User";
// import { BaseRepository } from "./BaseRepository";


// export class UserRepository extends BaseRepository<User> {
//   constructor(protected AbstractClass: User) {
//     super(AbstractClass);
//   }

//   async GetCompleteByEmail(email: string) {
//     if (!email) {
//       return undefined;
//     }

//     // return await this.AbstractClass.findOne({
//     //   where: {
//     //     email
//     //   },
//     //   // include: [{ model: UserLojista, include: [{ model: Loja }] }]
//     // });
//   }

//   async GetCompleteById(id: string) {
//     if (!id) {
//       return undefined;
//     }

//     // return await this.AbstractClass.findOne({
//     //   where: {
//     //     id
//     //   },
//     //   // include: [{ model: UserLojista, include: [{ model: Loja }] }]
//     // });
//   }
// }
