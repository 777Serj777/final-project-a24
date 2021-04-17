import { userRegistration } from "../../../api/appFetch/Fetch"

export const fetchRegistrationThunk = (body) => async dispatch => {
    
    try {
        const {id} =  await userRegistration(body);
        await dispatch({type: 'SIGN_UP_USER', payload: {id}});
    }
    catch(e) {
        console.error(e);     
    }

  

}