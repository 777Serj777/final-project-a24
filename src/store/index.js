import {createStore, combineReducers} from 'redux';
import currentUserReducer from './currentUser/currentUserReducer';


const rootReducer = combineReducers({
    currentUser: currentUserReducer,
});



const store = createStore(rootReducer);


export default store;