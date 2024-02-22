/*  import { conexion } from '../database/db.js' */
 import bcrypt from 'bcryptjs'
 import { createTokenAccess } from '../libs/jwt.js';

 export const register = async (req, res) => {
     const {name, email, password, phone} = req.body;

     /* console.log(name, email, password, phone);
     res.send('Registrando') */
     try {
         const passwordHash = await bcrypt.hash(password, 10)
        
        const nuevoUsuario = {
            name,
             email,
            password:passwordHash,
            phone
        }

         const UsuarioSaved = await conexion.query('INSERT INTO user SET ?', {name:nuevoUsuario.name, email:nuevoUsuario.email, password:nuevoUsuario.password, phone:nuevoUsuario.phone});
         const token = await createTokenAccess({ id: UsuarioSaved._id });
         res.cookie('token', token)

         return res.status(201).json({
             id: UsuarioSaved._id,
             name: UsuarioSaved.name,
             email: UsuarioSaved.email,

         })

     } catch (error) {
         res.status(500).json({ message: error.message})
     }
 };

// Verificar si el usuario existe en la base de datos
 /* const userExist = async (email) =>{
    const conn = await conexion();
    let existEmail = await conn.query("SELECT * FROM users WHERE email=?", [email]);
    conn.close()
    return existEmail[0] ? true : false ;
 } */

 export const login = async (req, res) => {
     const { email, password } = req.body;

     /* console.log(name, email, password, phone);
     res.send('Registrando') */
     try {

         const UserFound = await conexion.query('SELECT * FROM users WHERE email=?', [email]);
         if(!UserFound) return res.status(400).json({ message : "No se ha encontrado al ususario" })
        
        const isMatch = await bcrypt.compare(password, UserFound.password);
         if(!isMatch) return res.status(402).json({ message: "Algo esta pasando"})


         const token = await createTokenAccess({ id: UsuarioSaved._id });
         res.cookie('token', token)

        return res.status(201).json({
             id: UserFound._id,
            name: UserFound.name,
            email: UserFound.email,

         })

     } catch (error) {
         res.status(500).json({ message: error.message})
     }
};