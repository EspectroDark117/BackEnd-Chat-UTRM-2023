import jwt from "jsonwebtoken";
import fs from "fs";

export class Payload {
  createToken(data) {
    let private_key = null;
    if (process.env.MODE != "dev") {
      private_key = fs.readFileSync(process.env.PRIVATE_KEY, "utf8");
    } else {
      private_key = fs.readFileSync("./keys/private.pem", "utf8");
    }

    let cryptr = "";

    const user_id = data.id;
    const user_name = data.username;
    const role = 1;

    return jwt.sign(
      {
        user_id: user_id,
        user_name: user_name,
        role: role,
      },
      private_key,
      { algorithm: "RS256", expiresIn: "9h" }
    );
  }
}
