import prisma from "../prisma.js";

class UserModel {
    // Criar um novo usuário
  async create(data) {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }
// Atualizar um usuário
  async update(id, data) {
    const user = await prisma.user.update({
      where: {
        id: Number(id)
      },
      data
    });

    return user;
  }
    // Excluir um usuário
  async delete(id) {
    await prisma.user.delete({
      where: {
        id: Number(id)
      }
    });

    return true;
  }

}

export default new UserModel;