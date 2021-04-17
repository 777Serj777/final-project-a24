import actionType from './actionType';

const initState = {
  isLoading: true
}


const changeState = {

    [actionType.LOADER_OFF]: (state) => {
       
        return {
            ...state,
            isLoading: false  
        }
    },
    [actionType.LOADER_ON]: (state) => {
       
        return {
            ...state,
            isLoading: true  
        }
    },
     
}

const uiReducer = (state = initState, action) => {

    const {type, payload} = action;
    return (changeState[type]) ? changeState[type](state, payload) : {state};
}


export default uiReducer;