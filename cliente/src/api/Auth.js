import axios from 'axios'

export const API_PRODUCTOS = 'https://localhost:3001/products'

export const verProductos = product => axios.post(`${API_PRODUCTOS}/newProduct`, product);

/* import axios from "axios";
import { API_PRODUCTS } from '../api/Auth'
import { getProducts } from "../../../servidor/src/controllers/Products.controller";

export const getProductsRequest = () => axios.get(`${API_PRODUCTS}/products`, getProducts) */