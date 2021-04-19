import { folllowUser} from "../../../api/appFetch/Fetch"

const fetchFollowThunk = ({_id}) => async dispatch => {
    
 
    try{
        await dispatch({type: 'SUBSCRIBE_TO_USER', payload: {id: _id}});
        await folllowUser(_id);
    }
    catch(e){
        console.log(1);
    }

}



export default fetchFollowThunk;