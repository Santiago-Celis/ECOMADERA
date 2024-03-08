import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import authRoutes from './router/auth.routes.js'
import cookieParser from 'cookie-parser';
import productRoutes from './router/Product.routes.js'
import categoryRoutes from './router/Category.routes.js'
import addressRoutes from './router/Address.routes.js'
import cardRoutes from './router/Cards.routes.js'
import rolRoutes from './router/Rol.routes.js'

const  app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/* app.use(cors()); */

app.use(morgan('dev'));
app.use("/api", authRoutes);
app.use("/products", productRoutes);
app.use("/category", categoryRoutes);
app.use("/address", addressRoutes);
app.use("/card", cardRoutes);
app.use("/rol", rolRoutes);
// 
export default app;
