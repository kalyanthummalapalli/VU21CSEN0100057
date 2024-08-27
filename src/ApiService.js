import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/test/companies';

const ApiService = {
  getProducts: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching products');
    }
  },

  getProduct: async (productId) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/${productId}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching product');
    }
  },
};

export default ApiService;