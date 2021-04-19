

const fetchUnfollowThunk = (user) => async dispatch => {
    
    const id = user._id;
 
    try{
  
        await dispatch({type: 'SUBSCRIBE_TO_USER', payload: {_id: id}})
    }
    catch(e){
        console.log(1);
    }

}



export default fetchUnfollowThunk;