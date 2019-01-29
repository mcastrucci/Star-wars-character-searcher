import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { searchContent, searchResult } from './reducers/reducer'; 
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers ({searchContent, searchResult})
const logger = createLogger()
const store = createStore (rootReducer, applyMiddleware(thunkMiddleware, logger));




ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
