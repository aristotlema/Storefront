import axios from 'axios';

// https://dummyproducts-api.herokuapp.com/api/v1

export default axios.create({
    baseURL: 'https://dummyproducts-api.herokuapp.com',

});

