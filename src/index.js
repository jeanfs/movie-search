import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import rootReducers from './redux/reducers';

// Router
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles'
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, {}, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <GlobalStyles />
        <App />
      </React.Fragment>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
