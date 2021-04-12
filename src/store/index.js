import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk  from 'redux-thunk'
import currentUserReducer from './currentUser/currentUserReducer';


const rootReducer = combineReducers({
    currentUser: currentUserReducer,
});



const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

console.log(store);

export default store;