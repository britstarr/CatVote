import { RATE_CAT, GET_RANDOM_CATS, HANDLE_RATING } from './actions';
import axios from 'axios';
import key from '../_priv.js';

export function updateCatData(catData) {
  return {
    type: GET_RANDOM_CATS,
    catData: catData
  }
}

export function getRandomCats() {
  return function(dispatch, getState) {
    axios.get('http://thecatapi.com/api/images/get?format=html&results_per_page=20')
    .then(result => result.data.split('\n'))
    .then(data => dispatch(updateCatData(data)))
    .catch(err => console.log('error on data fetch', err));
  }
}

export function addCatVote(imageID, rating) {
  return function(dispatch, getState) {
    axios.post(`http://thecatapi.com/api/images/vote?api_key=${key}&image_id=${imageID}score=${rating}`)
    .then(result => console.log(result))
    // .then(data => dispatch(updateCatData(data)))
    .catch(err => console.log('error on data fetch', err));
  }
}
