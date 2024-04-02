import { Router } from 'express'
const router = Router()
import { register, login, logout, profile, users, deleteUsers } from '../controllers/Authcontroller.js';
import { requiredAuth } from '../middlewares/tokenValidation.js';
import { validateSchema } from '../middlewares/validator.middlewares.js'
import { registerSchema, loginSchema } from '../schemas/auth.schema.jsx'


const app = Router();

router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)

router.get('/verify', requiredAuth)
router.get('/profile', requiredAuth, profile)
router.get('/users', users)
router.delete('/deleteUser/:id', deleteUsers)


//Middleware para verificar si el usuario está logeado


export default router;