import { createStore, combineReducers, applyMiddleware } from 'redux';
import messageReducer from './reducers/message';
import userInfoReducer from './reducers/userInfo';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    messageReducer,
    userInfoReducer,
});
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk),)
);

export default store;
