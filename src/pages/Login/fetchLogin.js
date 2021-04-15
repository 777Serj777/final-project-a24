import { userLogin } from "../../api/appFetch/Fetch";

const fetchLogin = (body) => async dispatch => {

    try{
        const {access_token} = await userLogin(body);
        await dispatch({type: 'SIGN_IN_USER', payload:{token: {...access_token}}});
    }
    catch(e){
        console.log(e);
    }
}


export default fetchLogin;
    
