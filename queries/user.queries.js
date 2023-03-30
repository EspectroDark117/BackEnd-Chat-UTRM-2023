import { UserModel } from "../models/user.model.js";

class userQueries {
  async store(user) {
    try {
      const query = await UserModel.create(user);
      if (query) {
        return { ok: true, data: query };
      }
    } catch (e) {
      console.log("Error al ejecutar query", e);
      return { ok: false, data: null };
    }
  }

  async find() {
    try {
      const query = await UserModel.findAll();
      console.log("query ejecutando el user findall ", query);
      if (query) {
        return { ok: true, data: query };
      }
    } catch (e) {
      console.log("error al ejercutar query", e);
      return { ok: false, data: null };
    }
  }

  async findOne(condition = {}) {
    try {
      const query = await UserModel.findOne({
        where: { correo: condition.correo },
      });
      if (query) {
        return { ok: true, data: query };
      }
    } catch (e) {
      return { ok: false, data: null };
    }
  }

  async findOne_user(condition = {}) {
    try {
      const query = await UserModel.findOne({
        where: { user_id: condition.user_id },
      });
      if (query) {
        return { ok: true, data: query };
      }
    } catch (e) {
      return { ok: false, data: null };
    }
  }

  async update(data, condition = {}) {
    try {
      const query = await UserModel.update(data, { where: condition });
      if (query) {
        return { ok: true, data: query };
      } else {
        return { ok: false, data: null };
      }
    } catch (e) {
      console.log("error en el query", e);
    }
  }

  async create(user_id, nombre, pass, correo, foto) {
    try {
      const query = await UserModel.create({
        user_id: user_id,
        nombre: nombre,
        correo: correo,
        pass: pass,
        foto: foto,
      });
      if (query) {
        return { ok: true, data: query };
      } else {
        return { ok: false, data: null };
      }
    } catch (e) {
      return { ok: false, data: null };
    }
  }
}

export const UserQueries = new userQueries();
