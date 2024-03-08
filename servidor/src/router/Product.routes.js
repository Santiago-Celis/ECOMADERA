import { Router } from 'express'
const router = Router()

import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/Products.controller.js';
import multer from 'multer';
import { requiredAuth } from '../middlewares/tokenValidation.js';
import { checkoutRol } from '../middlewares/RolValidation.js'; 

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'src/imgs/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage })

router.post('/newProduct', upload.single('image') ,requiredAuth, checkoutRol([2]) ,createProduct);
router.get('/products', requiredAuth, checkoutRol([2]), getProducts);
router.get('/product/:id', getProduct);
router.put('/editProduct/:id',upload.single("image")  ,updateProduct);
router.delete('/deleteProduct/:id', deleteProduct);

export default router;