import { Router } from "express";
const router = Router();

import { createCategory, deleteCategory, getCategories, updateCategory, getCategory } from "../controllers/Category.controller.js";

import { authenticateToken } from "../middlewares/generateToken.js";

router.post('/newCategory', createCategory);
router.get('/categories',  getCategories);
router.get('/category/:id', authenticateToken, getCategory);
router.put('/updateCategory/:id', authenticateToken, updateCategory);
router.delete('/deleteCategory/:id', authenticateToken, deleteCategory);

export default router;