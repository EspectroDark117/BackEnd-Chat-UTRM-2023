import { hash, compare, genSalt } from "bcrypt";

class Encrypt {
  async encrypt(password) {
    const salt = await genSalt(10);
    const passhash = await hash(password, salt);
    return passhash;
  }

  async comparePass(passwordOrig, passwordDB) {
    const passcomp = await compare(passwordOrig, passwordDB);
    return passcomp;
  }
}

export const encrypt = new Encrypt();
