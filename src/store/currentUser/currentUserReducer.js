import actionType from './actionType';

const initState = {
    isAuth: false,
}

const currentUserReducer = (state = initState, action) => {

    const {type, payload} = action;

    switch(type){



        default: {
            return state;
        }
    }
}




export default currentUserReducer;