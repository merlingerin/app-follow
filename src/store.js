import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import HomePage from './pages/HomePage';
import reducers from './reducers/';


const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

export default store;

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" exect component={HomePage} />
        </Router>
    </Provider>
    , document.getElementById('root'));
