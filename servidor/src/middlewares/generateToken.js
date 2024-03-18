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

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
  
    if (token == null) return res.sendStatus(401); // Si no hay token, no está autorizado
  
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
      if (err) return res.sendStatus(403); // Si hay un error al verificar, podría ser un token no válido o expirado
      req.user = user; // Si el token es válido, guarda el payload en req.user
      next(); // Continúa con la siguiente middleware o ruta
    });
  };
  