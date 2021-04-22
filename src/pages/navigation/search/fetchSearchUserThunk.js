import { getUsers } from '../../../api/appFetch/Fetch';


const fetchSearchUsersThunk = (nameUser) => async dispatch => {


    try{
        await dispatch({type: 'LOADER_ON'})
        const data =  await getUsers(nameUser).then(response => response.json());
        await dispatch({type: 'GET_USERS', payload : {...data}})
  
    }
    catch(e){
        console.log(e);
    }
    finally{
        await dispatch({type: 'LOADER_OFF'})
    }
}


export default fetchSearchUsersThunk;