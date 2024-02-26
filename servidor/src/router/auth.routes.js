import { Router } from 'express'
const router = Router()
import { register, login, logout, profile } from '../controllers/Authcontroller.js';
import { requiredAuth } from '../middlewares/tokenValidation.js';



const app = Router();

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.get('/profile', requiredAuth, profile)

//Middleware para verificar si el usuario está logeado


export default router;