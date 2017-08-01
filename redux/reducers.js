import { RATE_CAT, GET_RANDOM_CATS, HANDLE_RATING } from './actions.js';

const DEFAULT_STATE = {
  catData: {}
};

const updateCatData = (state, action) => {
  const newCatData = Object.assign({}, state.catData, {
    data: action.catData
  });

  return Object.assign({}, state, {
    catData: newCatData
  });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_RANDOM_CATS:
      return updateCatData(state, action);
    case RATE_CAT:
      return addNewRating(state, action);
    case HANDLE_RATING:
      return addNewRating(state, action);
    default:
      return state;
  }
};

export default rootReducer;
