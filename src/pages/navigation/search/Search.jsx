import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import fetchSearchUsersThunk from "./fetchSearchUserThunk";



const StyleSearch = styled.div`
    position: relative;
    border-radius: .5rem;
    width: 100%;
    max-width: 29.7rem;
    height: 2.9rem;
    overflow: hidden;
    background: #fff url('img/search.svg') no-repeat 1.1rem 50%;
    margin-left: ${({ml}) => ml || 0};
    margin-right: ${({mr}) => mr || 0};


    input {
        padding-left: 5rem;
        padding-right: 3rem;
        width: inherit;
        height: inherit;
        border: none;
        outline: none;
        background-color: transparent;
    }
    span{
        position: absolute;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        padding: 0;
        background: #b8b4b4;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer; 
    }
`

const Search  = props => {

    const [value, setValue] = useState();
    const history = useHistory();
    const refInput = useRef()
    const dispatch = useDispatch();

    useEffect(()=> {

        const searchUser  = (value?.length > 0) && setTimeout(()=>{
            dispatch(fetchSearchUsersThunk(value));
            history.push('/search')   
        }, 500);
        
        if(value?.length === 0) {
            dispatch({type: 'CLEAR_USERS'})
            history.push('/main') 
        }

        return () => {clearTimeout(searchUser)}
    }, [value])
    
    return (
        <StyleSearch {...props}>
            <input ref = {refInput}  onChange = {e => setValue(e.target.value)}/>
            <span onClick = {() => {
                refInput.current.value = ''
                setValue('')
            }}></span>
        </StyleSearch>   
    )

}


export default Search;