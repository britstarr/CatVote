import { RATE_CAT } from './actions.js';

const DEFAULT_STATE = {
  catID: '',
  catData: {}
};

const addNewRating = (state, action) => {
  return Object.assign({}, state, {
    catID: action.searchTerm
  });
};

const addCatData = (state, action) => {
  const newCatData = Object.assign({}, state.catData, {
    [action.catID]: {
      favorite: action.favorite,
      rating: action.rating
    }
  });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case RATE_CAT:
      return addNewRating(state, action);
    default:
      return state;
  }
};

export default rootReducer;
