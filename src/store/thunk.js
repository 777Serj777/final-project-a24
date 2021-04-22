import { getCurrentUser } from "../api/appFetch/Fetch";

const initThunk = (store) => async dispatch => {
       
    try{

        const {token} = store.getState().currentUser.token
    
        if (token) {
            await dispatch({type: 'LOADER_ON'})
            await dispatch({type: 'SIGN_IN_USER', payload:{token}})
            const data = await getCurrentUser().then(response => response.json());
            await dispatch({type: 'SET_DATA_CARRENT_USER', payload:{...data}})
        } 
      
    }
    catch(e){
        console.log(e)
    }
    finally{
        await dispatch({type: 'LOADER_OFF'})
    }
}


export default initThunk;