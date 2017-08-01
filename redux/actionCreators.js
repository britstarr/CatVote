import { RATE_CAT, GET_RANDOM_CATS, GET_VOTED_CATS } from './actions';
import axios from 'axios';
import key from '../_priv.js';

export function updateCatData(catData) {
  return {
    type: GET_RANDOM_CATS,
    catData
  }
}

export function updateVoteData(votedData) {
  return {
    type: GET_VOTED_CATS,
    votedData
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

export function addCatVote(imgID, enteredRating) {
  return function(dispatch, getState) {
   axios.post(`http://thecatapi.com/api/images/vote?api_key=${key.data}&image_id=${imgID}&score=${enteredRating}`)
    .catch(err => console.log('error on data fetch', err));
  }
}

export function getVotedCats() {
  return function(dispatch, getState) {
    axios.get(`https://crossorigin.me/http://thecatapi.com/api/images/getvotes?api_key=${key.data}`)
    .then(voteData => {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(voteData.data,"text/xml");
      xmlDoc = Array.from(xmlDoc.documentElement.children[0].children[0].children);
      return xmlDoc.map(item => {
        const xmlText = new XMLSerializer().serializeToString(item);
        return xmlText
      });
    })
    .then(votedData => dispatch(updateVoteData(votedData)))
    .catch(err => console.log('error on data fetch', err));
  }
}
