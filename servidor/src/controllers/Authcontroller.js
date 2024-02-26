import { createTokenAccess } from "../libs/jwt.js";
import { User } from "../models/User.js";
import bcrypt from 'bcryptjs'


export const register = async (req, res) => {
    const { name,  email, password, phone } = req.body;

    try {
        const passwordHash = bcrypt.hashSync(password, 8);
        
        const newUser = User.create({
            name,
            email,
            password: passwordHash,
            phone
        });
        const userSaved = await  (await newUser).save();
        
        const token = createTokenAccess({ id: userSaved.id })
        res.cookie('token', token)
        res.status(200);
        return res.send({user: userSaved});
        
        /* return res.status(201).json(userSaved._id); */

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

export const login = async (req, res) => {
    // Get the user's credentials from the request body
    const { email, password } = req.body;
    
    try {
        
        const userFound = await User.findOne({ email });
        /* bcrypt.compare(password, userFound.password)
        .then(result => result).catch(err => {throw new Error(err)}); */

        User.prototype.isValidPassword = function( password ) {
            return bcrypt.compare(password, userFound.password)
            .then(result => result)
            .catch(err => {throw new Error(err)} );
        }
        if(!userFound) return res.status(500).json({ message: "ocurrio un error" })

        const token = await createTokenAccess({ id: userFound.id })
                res.cookie('token', token)
                res.status(200).json({
                    id: userFound.id,
                    name: userFound.name,
                    email: userFound.email,
                    token
                    
                });

        if(!userFound) return res.status(404).json({ message: "No se ha encontrado el usuario" });

        /* const isMatch = await User.findOne({ })
        if(!isMatch) return res.status(401).json({ message: "Contraseña incorrecta"}) */

        

    } catch (error) {
        res.status(500).json({ message: error.message})
    }
    
}

export const logout = async (req, res) => {
    res.cookie('token', '', {
        expires : new Date(0),
    });
    return res.status(200).json({ message: "cierre de sesion exitoso" })
}

export const profile = async (req, res) => {
    
    const userFound = await User.findByPk(req.user.id);
    if(!userFound) return res.status(400).json({ message: "El usuario no se ha encontrado " })

    console.log(userFound);

    res.status(200).json({
        id: userFound.id,
        name: userFound.name,
        email: userFound.email,
    });
}