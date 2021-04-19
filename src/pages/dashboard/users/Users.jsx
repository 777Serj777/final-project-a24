import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Avatar from '../../../components/Avatar/Avatar';
import Button from '../../../components/button/Button';
import Flex from '../../../components/flex/Flex';
import Text from '../../../components/text/Text'
import { colors } from '../../../style/variables';
import fetchFollowThunk from './fetchFollowThunk';
import fetchUnfollowThunk from './fetchUnfollowThunk';


const StyleUsers = styled.ul`
    height: 100%;
    padding-top: 3rem;

    .avatar{
        width: 5rem;
        height: 4.6rem;
    }

    .user{
        display: flex;
        align-items: center;
        height: 100%;
        max-width: 70.9rem;
        min-height: 6.15rem;
        border: .1rem solid ${colors.borderColor};
        border-radius: 1rem;
        padding: 0 3.1rem 0 2.6rem;

        &:not(:last-of-type){
            margin-bottom: 3.5rem;
        }

        &__info{
            align-items: center;
        }
        &__name{
            margin-left: 3.1rem;
        }
        &__btn {
            font-size: 1.4rem;
            height: 100%;
        }
    }
`
const User = ({user}) => {
    const dispatch = useDispatch();
    const {following} = useSelector(store => store.currentUser.data);
    const [isFollowing, setFollowing] = useState(following.some(({id}) => id === user._id));
    const {login,  avatar}  = user;
  
    const handleClickFollow = () => {
        dispatch(fetchFollowThunk(user));
        setFollowing(true);
    }
    const handleClickUnfollow = () => {
        dispatch(fetchUnfollowThunk(user));
        setFollowing(false);
    }
  
    return (
        <li className  = 'user'>
            <Flex className = 'user__info'>
                <Avatar minHeight = '0' className = 'avatar' imgUrl = {(avatar) ? avatar : 'img/Vector.png'}/>
                <Text className = 'user__name'>{login}</Text>
            </Flex>
           {
                (!isFollowing) ? 
                <Button 
                     onClick = {handleClickFollow}
                     className = 'user__btn' 
                     ml = 'auto' 
                     minWidth = '12rem'
                     minHeight = '2.75rem'
                >
                     Follow
                </Button> :
                     <Button 
                     onClick = {handleClickUnfollow}
                     className = 'user__btn' 
                     ml = 'auto' 
                     minWidth = '12rem'
                     minHeight = '2.75rem'
                     bgColor = '#FE7171'
                >
                     Unfollow
                </Button> 
            }
        </li>
    )
}
  
const Users = (props) => {
    
    const users = useSelector(store => store.users.users)
    

    return (
        <StyleUsers>
            {Object.values(users).map(user => <User key = {user._id} user = {user}></User>)}
        </StyleUsers>
    )
}



export default Users;