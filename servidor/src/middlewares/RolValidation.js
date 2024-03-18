import  Jwt  from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import { authenticateToken } from "./generateToken.js";
import { User } from "../models/User.js";


export const checkoutRol = (roles) => async (req, res, next) => {
    try {
        const token = await req.cookies.token;
        const tokenData = await verifyToken(token);
        const userData = await User.findByPk(tokenData._id);

        

        if ([].concat(roles).includes(userData.rol)){
            next()
        }else{
            res.status(409).send({ error: 'No tienes permisos' })
        }
    } catch (error) {
        
    }
}