import axios from 'axios';

const BASE_URL = 'https://world.openfoodfacts.org/'

const fetchCategories = () => {
  return axios.get(´$(BASE_URL)/categories.json´)
    .then(res => {
      console.log(res.tags.slice(0,10))
    })
    .catch(err => {
      console.error(err)
    })
}

const fetchCategories = (id) => {
  return axios.get(´$(BASE_URL)/api/v0/product/$(id)´)
    .then(res => {
      console.log(res.tags.slice(0,10))
    })
    .catch(err => {
      console.error(err)
    })
}

export { fetchBreeds };
