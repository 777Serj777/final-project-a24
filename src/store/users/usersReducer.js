import actionType from './actionType';

const initState = {
    
    users: {}
    
}

const userReducer = (state = initState, action) => {

    const {type, payload} = action;

    switch(type){
     

        case actionType.CLEAR_USERS: {
   
            return {
                ...state,
                users: {}
                             
            }
        }
        case actionType.GET_USERS: {
   
            return {
                ...state,
                users: payload
                             
            }
        }

        default: {
            return state;
        }
    }
}


export default userReducer;



/**
 * Serjo
 * 
 * 23nnn23nnn
 * serjo.ua@gmail.com
 * 
 */