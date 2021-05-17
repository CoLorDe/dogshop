import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2/'

const fetchPokemon = () => {
  return axios.get(`${BASE_URL}/`)
    .then(res => {
      return res.data.tags.slice(0,10)
    })
    .catch(err => {
      console.error(err)
    })
}


export { fetchPokemon };
