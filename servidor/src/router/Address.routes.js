import { Router } from "express";
const router = Router();

import { requiredAuth } from "../middlewares/tokenValidation.js";
import { createAddress, deleteAddress, getAddress, getAddresses, updateAddress } from "../controllers/Adress.controller.js";

router.post('/newAddress', requiredAuth, createAddress);
router.get('/Addresses', requiredAuth, getAddresses);
router.get('/Address/:id', requiredAuth, getAddress);
router.put('/updateAddress/:id', requiredAuth, updateAddress);
router.delete('/deleteAddress/:id', requiredAuth, deleteAddress);

export default router;