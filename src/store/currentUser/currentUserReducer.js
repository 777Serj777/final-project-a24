import actionType from './actionType';

const initState = {
    isAuth: false,
    token: '',
    data: {

    }
}

const currentUserReducer = (state = initState, action) => {

    const {type, payload} = action;

    switch(type){
        
        case actionType.SIGN_UP_USER: {
            console.log(payload.id);
            return {
                ...state,
                data: {
                    ...state.data,
                    id: payload.id
                }
            }
        }
        case actionType.SIGN_IN_USER: {
            return {
                ...state,
                isAuth: true,
                token: payload.token    
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