import { getCurrentUser, userLogin } from "../../../api/appFetch/Fetch";

const fetchLogin = (body) => async dispatch => {

    try{
   
        const {access_token: token} = await userLogin(body);
        await dispatch({type: 'SIGN_IN_USER', payload:{token}});
        localStorage.setItem('access_token', JSON.stringify({
            token: token,
            expires_in: ''
        }))
        const data = await getCurrentUser();
        await dispatch({type: 'SET_DATA_CARRENT_USER', payload:{...data}});
    }
    catch(e){
        console.log(e);
    }
}


export default fetchLogin;
    
