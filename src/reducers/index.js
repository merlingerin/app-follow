import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appState from './AppState';

export default combineReducers({
    routing: routerReducer,
    appState
});
