import { Router } from 'express';
import multer from 'multer';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/Products.controller.js';
import { checkoutRol } from '../middlewares/RolValidation.js'; 
import { authenticateToken } from '../middlewares/generateToken.js';
import { requiredAuth } from '../middlewares/tokenValidation.js';
import { validateSchema } from '../middlewares/validation.js'; 
import { createProductSchema } from '../schemas/productSchema.js'; 

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'src/imgs');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/newProduct', 
    upload.single('image'), 
    authenticateToken, 
    requiredAuth, 
    validateSchema(createProductSchema), 
    checkoutRol([2]), 
    createProduct
);

router.get('/products', authenticateToken, getProducts);
router.get('/product/:id', authenticateToken, getProduct);
router.put('/editProduct/:id', 
    upload.single('image'), 
    authenticateToken, 
    requiredAuth,
    updateProduct
);
router.delete('/deleteProduct/:id', authenticateToken, deleteProduct);

export default router;