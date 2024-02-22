import express from 'express';
import morgan from 'morgan';
import authRoutes from './router/auth.routes.js'
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const  app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use("/api", authRoutes)
// 
export default app;
