export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_SUM = 'SET_SUM';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const setSum = (sum) => ({ type: SET_SUM, payload: sum });
