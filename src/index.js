import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';

import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import './index.css';
import {searchRobots} from './reducers';


const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger))

ReactDOM.render(
                <Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();

//My innocent little change
