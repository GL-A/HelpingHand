import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { injectGlobal } from 'styled-components'
import './index.css'
import reducers from './ducks/reducers'
import Routes from './Routes'
import registerServiceWorker from './registerServiceWorker'

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, p {
    margin: 0;
  }
`
const Store = applyMiddleware(thunk)(createStore)
const rootReducer = combineReducers(reducers)


ReactDOM.render(<Provider store={ Store(rootReducer) }>
  <Routes />
</Provider>, document.getElementById('root'));
registerServiceWorker();
