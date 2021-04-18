import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk  from 'redux-thunk'
import currentUserReducer from './currentUser/currentUserReducer';
import initThunk from './thunk';
import uiReducer from './ui/uiReducer';
import usersReducer from './users/usersReducer'


const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    ui: uiReducer,
    users: usersReducer,
});



const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

store.dispatch(initThunk(store));

export default store;