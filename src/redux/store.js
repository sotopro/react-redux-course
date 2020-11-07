import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import cakeReducer from './cake/cakeReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(
    cakeReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
    )

export default store;