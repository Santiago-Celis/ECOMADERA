import { Router } from 'express'
const router = Router()
import { register, login, logout, profile, users, deleteUsers /* parseJwt */ } from '../controllers/Authcontroller.js';
import { requiredAuth } from '../middlewares/tokenValidation.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { loginSchema, registerSchema } from '../Schemas/schemas.js';



const app = Router();

router.post('/register', /* validateSchema(registerSchema), */ register)
router.post('/login', /* validateSchema(loginSchema), */ login)
router.post('/logout', logout)

/* router.get('/payload', parseJwt) */

router.get('/verify', requiredAuth)
router.get('/profile', requiredAuth, profile)
router.get('/users', users)
router.delete('/deleteUser/:id', deleteUsers)


//Middleware para verificar si el usuario está logeado


export default router;