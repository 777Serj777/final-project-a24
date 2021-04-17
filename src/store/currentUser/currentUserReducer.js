import actionType from './actionType';

const initState = {
    isAuth:  false,  
    token: JSON.parse(localStorage.getItem('access_token')),
    data: {
    }
}

const currentUserReducer = (state = initState, action) => {

    const {type, payload} = action;

    switch(type){
        
        case actionType.SIGN_UP_USER: {
     
            return {
                ...state,
                data: {
                    ...state.data,
                    id: payload.id,
                }
            }
        }
        case actionType.SIGN_IN_USER: {

            return {
                ...state,
                isAuth: true,         
                ...payload,    
            }
        }
        case actionType.START_LOADER: {
            return {
                ...state,
                isLoader: true              
            }
        }
        case actionType.SET_DATA_CARRENT_USER: {
   
            return {
                ...state,
                data: {
                    ...state.data,
                    ...payload
                }             
            }
        }

        default: {
            return state;
        }
    }
}


export default currentUserReducer;



/**
 * Serjo
 * 
 * 23nnn23nnn
 * serjo.ua@gmail.com
 * 
 */