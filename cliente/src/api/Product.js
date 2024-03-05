import axios from "axios";

export const getProductsRequest = () => axios.get(`/products`);
export const getProductRequest = (id) => axios.get(`/product/${id}`);
export const createProductRequest = (product) => axios.post(`/Profile/agregar`, product);
export const updateProductRequest = (product) => axios.put(`/product/${product.id}`, product);
export const deleteProductRequest = (id) => axios.get(`/product/${id}`);