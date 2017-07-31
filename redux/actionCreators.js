import { RATE_CAT } from './actions';
import axios from 'axios';

export function setCurrentCat (rating, id, favorite) {
  return {
    type: RATE_CAT,
    rating,
    id,
    favorite
  };
}
