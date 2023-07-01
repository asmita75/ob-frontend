import axios from 'axios';

const Api = axios.create({
    baseURL:'http://localhost:5000',
    withCredentials: true,
    headers: {
        'Content-type':'multipart/form-data',
    },
});

const config ={
    headers: {
        'authorization':`Bearer $(localStorage.getItem('token'))`,
    }
}

//creating route
export const testApi=() => Api.get('/');

export const registerApi = (data) => Api.post('/api/user/register', data);

export const loginApi = (data) => Api.post('/api/user/login', data);

// product route
export const addProductApi = (data) => Api.post('/api/product/add',data, config);

export const getAllProductsApi=() => Api.get('/api/product/get_products');


export const getSingleProductsApi=(id) => Api.get(`/api/product/get_product/${id}`);

export const updateProductApi=(id,data)=>Api.get(`api/product/update_product/${id}`,data,config);

export const deleteProductApi=(id)=>Api.delete(`api/product/delete_product/${id}`,config);

export const createOrderApi=(data)=>Api.post(`/api/orders/create`,data,config);

export const getOrdersByUserApi=()=>Api.get('/api/orders/get_Single',config);

export const getAllOrdersApi=()=>Api.get('/api/orders/get_all');

//update order status
export const UpdateOrderStatusApi=(id,data)=>Api.put(`/api/orders/change_status/${id}`,data ,config);

//search products
export const SearchProductApi=(query)=>Api.get(`/api/product/search_product/${query}`);

//count products 
export const getCount=()=>Api.get(`/api/product/count`);

//forgot password
export const forgotPasswordApi=(data)=>Api.post('/api/user/forgot_password',data);