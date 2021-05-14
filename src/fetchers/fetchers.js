import axios from 'axios';

const BASE_URL = 'https://world.openfoodfacts.org'

const fetchCategories = () => {
  return axios.get(`${BASE_URL}/categories.json`)
    .then(res => {
      return res.data.tags.slice(0,10)
    })
    .catch(err => {
      console.error(err)
    })
}

const fetchCategory = (id) => {
  return axios.get(`${BASE_URL}/api/category/${category}`)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.error(err)
    })
}

const fetchProduct = (category) => {
  return axios.get(`${BASE_URL}/api/v0/product/${id}`)
    .then(res => {
      return res.data
    })
    .catch(err => {
      console.error(err)
    })
}

export { fetchCategories, fetchCategory, fetchProduct };
