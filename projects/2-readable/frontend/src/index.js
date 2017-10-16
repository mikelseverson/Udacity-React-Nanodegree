import registerServiceWorker from './registerServiceWorker'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './reducers'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux'

import './index.css'
import App from './components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory()

const middleware = [
    thunk, 
    routerMiddleware(history)
]

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
)

const store = createStore(
    reducer, enhancer
)

const Root = () => (
    <Provider store={store}>
        <MuiThemeProvider>
            <ConnectedRouter history={history}>
                <App store={store}/>
            </ConnectedRouter>
        </MuiThemeProvider>
    </Provider>
)

ReactDOM.render(
    <Root />,
    document.getElementById('root')
)

registerServiceWorker()
