import { Router } from 'express'
const router = Router()

import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/Products.controller.js';
import multer from 'multer';
import { requiredAuth } from '../middlewares/tokenValidation.js';

const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'src/imgs/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage })

router.post('/newProduct', upload.single('image'), requiredAuth ,createProduct);
router.get('/products',  getProducts);
router.get('/product/:id', getProduct);
router.put('/editProduct/:id',upload.single("image"), requiredAuth ,updateProduct);
router.delete('/deleteProduct/:id', requiredAuth, deleteProduct);

export default router;