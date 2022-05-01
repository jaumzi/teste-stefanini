export interface BaseRepository<T> {

  GetAll(): Promise<T>;

  // async GetById(id, attributes) {
  //   if (!id) {
  //     return undefined;
  //   }
  //   return await this.AbstractClass.findByPk(id, {
  //     ...attributes
  //   });
  // }

  // Insert(data) {
  //   if (!data) {
  //     return undefined;
  //   }
  //   return this.AbstractClass.create(data);
  // }

  // Edit(data) {
  //   if (!data.id) {
  //     return undefined;
  //   }

  //   return this.AbstractClass.update(data, {
  //     where: {
  //       id: data.id
  //     }
  //   });
  // }

  // Delete(id) {
  //   if (!id) {
  //     return undefined;
  //   }

  //   return this.AbstractClass.destroy({
  //     where: {
  //       id
  //     },
  //     force: true
  //   });
  // }

  // SoftDelete (id: string) {
  //   if (!id) {
  //     return undefined;
  //   }

  //   // O objeto não é deletado, apenas a coluna deletedAt é atualizada para o tempo atual
  //   return this.AbstractClass.destroy({
  //     where: {
  //       id
  //     }
  //   });
  // }
}
