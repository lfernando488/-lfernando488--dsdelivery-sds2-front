import axios from "axios";

const API_URL = 'https://sds-delivery-api.herokuapp.com';

export function fetchProducts(){
    return axios(`${API_URL}/products`)
}