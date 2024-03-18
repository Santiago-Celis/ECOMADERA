import axios from "axios";

const url = 'https://localhost:3001/api';

export const getUsers = axios.get(url + '/users');

