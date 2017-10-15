import registerServiceWorker from './registerServiceWorker'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk';
import reducer from './reducers'

import './index.css'
import App from './components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk]

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
  );

const store = createStore(
    reducer, enhancer
)

const Root = () => (
    <MuiThemeProvider>
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>
    </MuiThemeProvider>
  );
ReactDOM.render(
    <Root />,
    document.getElementById('root')
)

registerServiceWorker()
