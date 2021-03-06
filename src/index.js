import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import'bootstrap/dist/css/bootstrap.min.css';
import reducer from './util/redux/reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import ReduxPromise from 'redux-promise';
import {applyMiddleware, compose, createStore} from 'redux';



const store = createStore(
  reducer,
  compose(
      applyMiddleware(thunk,ReduxPromise),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__({trace: true, traceLimit: 25}) : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
