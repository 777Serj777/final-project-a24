import { folllowUser} from "../../../api/appFetch/Fetch"

const fetchFollowThunk = ({_id}) => async dispatch => {
    
 
    try{
        await folllowUser(_id);
        await dispatch({type: 'SUBSCRIBE_TO_USER', payload: {id: _id}});
    }
    catch(e){
        console.log(e);
    }
    finally{
       
    }

}



export default fetchFollowThunk;