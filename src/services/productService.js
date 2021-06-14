import axios from 'axios';
import ApiConfiguration from './apiConfiguration';
export default class ProductService{
    getProduct(){
        return axios.get(`${ApiConfiguration.baseApiUrl}/products/getall`);
    }

    getProductByName(productName){
        return axios.get(`${ApiConfiguration.baseApiUrl}/products/getByProductName?productName=${productName}`);
    }

}