import { where } from "sequelize";
import { CreditCard } from "../models/User.js";

export const createCard = async ( req, res ) => {
    const { Titular, CardNumber, CVV, ExpirationDate, UserId } = req.body

    try {
        const newCard = await  CreditCard.create({
            Titular,
            CardNumber,
            CVV,
            ExpirationDate,
            UserId
        });

        const cardSaved = await newCard;
        res.status(201).json(cardSaved)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const  getCards = async (req, res) =>{
    
    const cards = await CreditCard.findAll({
        where: { UserId : req.user.id}
    });
    res.json(cards)

}

export const getCard = async (req, res) => {

    const cardId = req.params.id

    const card = await Product.findByPk(cardId);
    res.json(card)

}

export const updateCard = async ( req, res ) => {
    const { Titular, CardNumber, CVV, ExpirationDate } = req.body

    try {
        const updateCard = await  CreditCard.update({
            Titular,
            CardNumber,
            CVV,
            ExpirationDate
        });

        const cardUpdated = await updateCard;
        res.status(201).json(cardUpdated)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteCard = async (req, res) => {

    const card = Card.destroy({
        where: { id: req.params.id }
    })
    if(!card) return res.status(404).json({ message: "no se encontro la categoria" })
    res.status(200).json({ message: "Se ha eliminado la categoria correctamente" })

}