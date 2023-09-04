import { createStore } from 'redux';
import { counterReducer } from './reducers/counterReducer'; // Zakładając, że reducer znajduje się w katalogu reducers

export const store = createStore(counterReducer);
