import { Router } from "express";
const router = Router();

import { createCategory, deleteCategory, getCategories, updateCategory, getCategory } from "../controllers/Category.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";

router.post('/newCategory', requiredAuth, createCategory);
router.get('/categories', requiredAuth, getCategories);
router.get('/category/:id', requiredAuth, getCategory);
router.put('/updateCategory/:id', requiredAuth, updateCategory);
router.delete('/deleteCategory/:id', requiredAuth, deleteCategory);

export default router;