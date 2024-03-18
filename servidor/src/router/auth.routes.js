import { Router } from 'express'
const router = Router()
import { register, login, logout, profile, users, deleteUsers } from '../controllers/Authcontroller.js';
import { requiredAuth } from '../middlewares/tokenValidation.js';



const app = Router();

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

router.get('/verify', requiredAuth)
router.get('/profile', requiredAuth, profile)
router.get('/users', users)
router.delete('/deleteUser/:id', deleteUsers)


//Middleware para verificar si el usuario está logeado


export default router;