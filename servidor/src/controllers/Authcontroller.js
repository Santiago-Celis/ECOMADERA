import { where } from "sequelize";
import { createTokenAccess } from "../libs/jwt.js";
import { User } from "../models/User.js";
import bcrypt from 'bcryptjs'
import { tokenSign } from "../middlewares/generateToken.js";


export const register = async (req, res) => {
    const { name, email, password, phone, rol } = req.body;

    const  userExist = await User.findOne({
        where: {
            email: email
        }
    });

    try {

        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);
        
        if( !userExist ){
            const newUser = await User.create({
                name,
                email,
                password: passwordHash,
                phone,
                rol
            });

            const userSaved = await newUser;
            
    
            const token = await tokenSign(userSaved)
    
            res.cookie('token', token)
            return res.send({
                data: userSaved,
                token
            });
        }else{
            res.status(409).json({message:'El correo electronico ya existe.'})
        }


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
        // Find user by email using appropriate comparison operator
        const userFound = await User.findOne({where: {email: email}});

        if (!userFound) {
            return res.status(404).json({ message: "No se ha encontrado el usuario" });
        }

        // Compare password using bcrypt
        const comparacion = await bcrypt.compare(password, userFound.password);

        if (comparacion) {

            const token = await tokenSign(userFound)

            res.cookie('token', token);
            res.send({
                data: userFound,
                token
            })

        } else {
            res.status(401).json({ msg: "Contraseña incorrecta" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


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

export const users = async (req,res) => {
    const users = await User.findAll();

    res.json({users})
}

export const deleteUsers = async (req, res) => {
    
        const user = await User.destroy({
            where:{
                id: req.params.id
            }
        })

        if(!user) return res.status(500).json({ message: "no se encontro al usuario" })
        res.status(200).json({ message: "El usuario se ha eliminado con exito" })
        
    
}