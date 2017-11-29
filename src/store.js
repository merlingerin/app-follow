import { createStore } from 'redux';
import AppState from './reducers/AppState';

const store = createStore(AppState);
export default store;