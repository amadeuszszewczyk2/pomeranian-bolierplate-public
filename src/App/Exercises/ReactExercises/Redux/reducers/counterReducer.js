import { SET_SUM } from '../actions/counterActions';

const initialState = {
  sum: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUM:
      return { ...state, sum: action.payload };
    default:
      return state;
  }
};
