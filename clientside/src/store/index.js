import { applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { legacy_createStore as createStore} from 'redux'



import rootReducer from '../reducers';

const middle = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middle);

export default store;