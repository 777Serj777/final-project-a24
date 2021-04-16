import actionType from './actionType';

const initState = {
    isLoader: false,
    isAuth: false,
    token: '',
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
                    isLoader: false   
                }
            }
        }
        case actionType.SIGN_IN_USER: {
            console.log(payload);
            return {
                ...state,
                isAuth: true,
                isLoader: false,
                ...payload,    
            }
        }
        case actionType.START_LOADER: {
            return {
                ...state,
                isLoader: true              
            }
        }
        case actionType.END_LOADER: {
            return {
                ...state,
                isLoader: false              
            }
        }
        case actionType.SET_DATA_CARRENT_USER: {
            console.log(payload);
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