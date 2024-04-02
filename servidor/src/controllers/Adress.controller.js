import { Address } from "../models/User.js"

export const createAddress = async ( req, res ) => {
    const { Department, City, Direccion, UserId } = req.body

    try {
        const newAddress = await  Address.create({
            Department,
            City,
            Direccion,
            UserId
        });

        const addressSaved = newAddress;
        res.status(201).json(addressSaved)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message })
    }

}

export const getAddresses = async (req, res) => {

    try {
        const address = await Address.findAll();
        res.json(address)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const getAddress = async  (req, res) => {

    const id = req.params.id

    const address = await Address.findByPk(id);
    res.json(address);

}

export const updateAddress = async ( req, res ) => {
    const { Department, City, Direccion } = req.body

    try {
        const address = await  Address.update({
            Department,
            City,
            Direccion
        });

        const addressSaved = await address.save();
        res.status(201).json(addressSaved)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const deleteAddress = async (req, res) => {

    const address = Address.destroy({
        where: { id: req.params.id }
    })
    if(!address) return res.status(404).json({ message: "no se encontro la categoria" })
    res.status(200).json({ message: "Se ha eliminado la categoria correctamente" })

}