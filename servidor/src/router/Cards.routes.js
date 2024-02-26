import { Router } from "express";
const router = Router();


import { requiredAuth } from "../middlewares/tokenValidation.js";
import { createCard, deleteCard, getCard, getCards, updateCard } from "../controllers/Credit.controller.js";

router.post('/newCard', requiredAuth, createCard);
router.get('/cards', requiredAuth, getCards);
router.get('/card/:id', requiredAuth, getCard);
router.put('/updateCard/:id', requiredAuth, updateCard);
router.delete('/deleteCard/:id', requiredAuth, deleteCard);

export default router;