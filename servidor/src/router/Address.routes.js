import { Router } from "express";
const router = Router();

import { requiredAuth } from "../middlewares/tokenValidation.js";
import { createAddress, deleteAddress, getAddress, getAddresses, updateAddress } from "../controllers/Adress.controller.js";
import { authenticateToken } from "../middlewares/generateToken.js";

router.post('/newAddress', authenticateToken, createAddress);
router.get('/Addresses', /* requiredAuth, */ getAddresses);
router.get('/Address/:id', requiredAuth, getAddress);
router.put('/updateAddress/:id', requiredAuth, updateAddress);
router.delete('/deleteAddress/:id', requiredAuth, deleteAddress);

export default router;