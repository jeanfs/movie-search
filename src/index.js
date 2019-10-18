import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

// Router
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles'
import App from './App';
import * as serviceWorker from './serviceWorker';

// Compose enhacer
const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store
const store = createStore(
  rootReducer,
  devCompose(applyMiddleware(thunk))
)

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
