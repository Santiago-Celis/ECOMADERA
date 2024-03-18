import {Router} from 'express'
import { createOrder } from '../controllers/Payment.controllers.js';
const router = Router();

router.post('/create_Order', createOrder)

router.get('/success', (req,res) => res.send('Order succsesfuly created'))

router.get('/webhook', (req,res) => res.send('webhook'))


export default router