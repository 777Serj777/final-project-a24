import { getUsers } from '../../api/appFetch/Fetch';


const fetchSearchUsersThunk = (nameUser) => async dispatch => {


    try{
       const data =  await getUsers(nameUser);
       await dispatch({type: 'GET_USERS', payload : {...data}})
    }
    catch(e){
        console.log(e);
    }
    finally{

    }
}


export default fetchSearchUsersThunk;