import axios from 'axios'

export const API_PRODUCTOS = 'https://localhost:3001/products'

export const verProductos = product => axios.get(`${API_PRODUCTOS}/products`, product);