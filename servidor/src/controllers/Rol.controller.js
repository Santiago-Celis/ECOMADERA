import { Roles } from "../models/Rol.js";
import { User } from "../models/User.js";

export const createRol = async (req, res) => {
    const { name } = req.body;

    try {
        
        const newRol = await Roles.create({
            name
        })

        const rolSaved = await newRol;
        if (!rolSaved) return res.status(400).send("Error al crear el Rol");

        res.status(200).json(rolSaved);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const getRoles = async (req, res) => {
    try {
        const roles = Roles.findAll()
        res.status(201).json(roles)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

