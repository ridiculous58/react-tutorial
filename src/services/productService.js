import axios from 'axios';
export default class ProductService{
    baseUrl = "http://localhost:8080/api";
    getProduct(){
        return axios.get(`${this.baseUrl}/products/getall`);
    }

}