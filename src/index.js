import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunlMiddleware from 'redux-thunk';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import './index.css';
import {searchRobots, requestRobots} from './reducers';


const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunlMiddleware, logger))

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();

//My innocent little change
