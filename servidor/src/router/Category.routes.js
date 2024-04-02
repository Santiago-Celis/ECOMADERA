import { Router } from "express";
import { createCategory, deleteCategory, getCategories, updateCategory, getCategory } from "../controllers/Category.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { categorySchema } from "../schemas/categorySchema.js";

const router = Router();

router.post('/newCategory', requiredAuth, validateSchema(categorySchema), createCategory);
router.get('/categories', requiredAuth, getCategories);
router.get('/category/:id', requiredAuth, getCategory);
router.put('/updateCategory/:id', requiredAuth, validateSchema(categorySchema), updateCategory);
router.delete('/deleteCategory/:id', requiredAuth, deleteCategory);

export default router;