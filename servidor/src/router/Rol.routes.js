import { Router } from "express";
const router = Router();

import { requiredAuth } from '../middlewares/tokenValidation.js';
import { createRol, getRoles } from "../controllers/Rol.controller.js";


router.post('/newRol', createRol);
router.get('/Roles', requiredAuth, getRoles);
/* router.get('/Rol/:id', requiredAuth, getRol);
router.put('/updateRol/:id', requiredAuth, updateRol);
router.delete('/deleteRol/:id', requiredAuth, deleteRol); */

export default router;