import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import { verifyToken } from "./generateToken.js";


export const requiredAuth = async (req, res, next) => {
    try {

        const token = await req.cookies.token
        const tokenData = await verifyToken(token)
        console.log(tokenData);
        if (tokenData.id){
            req.user = tokenData
            next()
        } else {
            res.status(409).send({ error: 'You shall not pass!!' })
        }
    } catch (error) {
        console.log(error);
    }
    
    /* console.log(req.headers);
    const { token } = req.cookies;
    console.log(token);
    if(!token)
    return res.status(401).json({ message : "No estas autorizado, inicia sesion" })

    jwt.verify(token, TOKEN_SECRET, (err, user) =>{
        if(err) res.status(403).json({ message: "Invalid Token" });

        req.user = user;
        next();
    }) */
}