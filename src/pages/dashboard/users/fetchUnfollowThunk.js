import { folllowUser} from "../../../api/appFetch/Fetch"


const fetchUnfollowThunk = ({_id}) => async dispatch => {
    
 
    try{
        
        await folllowUser(_id);
        await dispatch({type: 'UNSUBSCRIBE_USER', payload: {id: _id}});
    }
    catch(e){
        console.log(e);
    }

}



export default fetchUnfollowThunk;