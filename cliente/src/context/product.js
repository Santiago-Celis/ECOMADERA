import axios from "axios";
import { API_PRODUCTS } from '../api/Auth'
import { getProducts } from "../../../servidor/src/controllers/Products.controller";

export const getProductsRequest = () => axios.get(`${API_PRODUCTS}/products`, getProducts)