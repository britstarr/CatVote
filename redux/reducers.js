import { GET_RANDOM_CATS, GET_VOTED_CATS, GET_FAVORITE_CATS } from './actions.js';

const DEFAULT_STATE = {
  catData: {},
  votedData: {},
  faveData: {}
};

const updateCatData = (state, action) => {
  const newCatData = Object.assign({}, state.catData, {
    data: action.catData
  });

  return Object.assign({}, state, {
    catData: newCatData
  });
};

const updateVoteData = (state, action) => {
  const newVotedData = Object.assign({}, state.votedData, {
    data: action.votedData
  });

  return Object.assign({}, state, {
    votedData: newVotedData
  });
};

const updateFaves = (state, action) => {
  const newFaveData = Object.assign({}, state.faveData, {
    data: action.faveData
  });

  return Object.assign({}, state, {
    faveData: newFaveData
  });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case GET_RANDOM_CATS:
      return updateCatData(state, action);
    case GET_FAVORITE_CATS:
      return updateFaves(state, action);
    case GET_VOTED_CATS:
      return updateVoteData(state, action);
    default:
      return state;
  }
};

export default rootReducer;
