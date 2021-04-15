import actionType from './actionType';

const changeState = {

    [actionType.ADD_ERROR]: (state, payload) => {
       
        return {
            ...state,
            errors: {
                ...state.errors,
                [payload.name]: {
                    message: payload.message
                }
            }
        }
    },

    [actionType.DELETE_ERROR]: (state, payload) => {

        let {errors} = state;
        delete errors[payload.name]; 
       
        return {      
           ...state,
           errors: {
               ...errors
           }
        }
    },

    [actionType.ADD_USER_DATA]: (state, payload) => {
     
        return {      
            ...state,
            data: {
                ...state.data,
                ...payload
            }
        }
    },

    [actionType.CHANGE_IS_VALID]: (state, payload) => {
    
        return {      
            ...state,
            data: {
                ...state.data,
                ...payload
            }
        }
    }
}

const reducer = (state, action) => {

    const {type, payload} = action;
    return changeState[type](state, payload);
}


export default reducer;