import registerServiceWorker from './registerServiceWorker'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import rootReducer from './reducers'

import './index.css'
import App from './components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const Root = () => (
    <MuiThemeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MuiThemeProvider>
  );
ReactDOM.render(
    <Root />,
    document.getElementById('root')
)

registerServiceWorker()
