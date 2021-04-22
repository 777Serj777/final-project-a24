import {  updateCurrentUser } from "../../../api/appFetch/Fetch";


const updateCurrentUserThunk = (body) => async dispatch => {

    try{
      
        const data =   await updateCurrentUser(body).then(response => response.json()); 

        await dispatch({type: 'SET_DATA_CARRENT_USER', payload:{...data}});
    }
    catch(e){
        console.log(e);
    }
}

export default updateCurrentUserThunk;