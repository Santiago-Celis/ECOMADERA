import axios  from 'axios';

export const deleteProduct = (id) => axios.delete(`https://localhost:3001/product/deleteProduct/${id}`)