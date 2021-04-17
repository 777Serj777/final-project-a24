import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk  from 'redux-thunk'
import currentUserReducer from './currentUser/currentUserReducer';
import initThunk from './thunk';
import uiReducer from './ui/uiReducer';


const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    ui: uiReducer,
});



const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

store.dispatch(initThunk(store));

export default store;