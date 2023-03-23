import axios from './axios.config'

export const fetchProducts = async () => {
    const data = await axios.get('/products');
    return data.data;

}
export const postProducts = async (product) => {
    const data = await axios.post('/addproduct', product);
    return data.data;

}
export const deleteProducts = async (id) => {
    const data = await axios.delete(`/deleteproduct/${id}`);
    return data.data;

}