import { Router } from "express";
import { createAddress, deleteAddress, getAddress, getAddresses, updateAddress } from "../controllers/Adress.controller.js";
import { authenticateToken } from "../middlewares/generateToken.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { addressSchema } from "../schemas/addressSchema.js";

const router = Router();

router.post('/newAddress', authenticateToken, validateSchema(addressSchema), createAddress);
router.get('/Addresses', getAddresses);
router.get('/Address/:id', getAddress);
router.put('/updateAddress/:id', validateSchema(addressSchema), updateAddress);
router.delete('/deleteAddress/:id', deleteAddress);

export default router;