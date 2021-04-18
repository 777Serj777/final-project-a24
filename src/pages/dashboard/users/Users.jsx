import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Avatar from '../../../components/Avatar/Avatar';
import Button from '../../../components/button/Button';
import Flex from '../../../components/flex/Flex';
import Text from '../../../components/text/Text'
import { colors } from '../../../style/variables';


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
const User = props => {

    const {login, avatar} = props;
    
    return (
        <li className  = 'user'>
            <Flex className = 'user__info'>
                <Avatar className = 'avatar' imgUrl = {(avatar) ? avatar : 'img/Vector.png'}/>
                <Text className = 'user__name'>{login}</Text>
            </Flex>
            <Button 
                className = 'user__btn' 
                ml = 'auto' 
                maxWidth = '12rem'
                minHeight = '2.75rem'
            >
                Follow
            </Button>
        </li>
    )
}
  
const Users = (props) => {
    
    const users = useSelector(store => store.users.users)
  

    return (
        <StyleUsers>
            {Object.values(users).map(user => <User login = {user.login} avatar = {user.avatar} key = {user._id}></User>)}
        </StyleUsers>
    )
}



export default Users;