import jwt  from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const tokenSign = async (user) => {
    return jwt.sign(
        {
            _id: user.id,
            rol: user.rol 
        },
        TOKEN_SECRET,
        {
            expiresIn: "1d"
        }
    );
}

export const verifyToken = async (token) => {
    try {
        return jwt.verify(token, TOKEN_SECRET)
    } catch (error) {
        return null
    }
}