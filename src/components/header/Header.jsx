import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import Avatar from "../Avatar/Avatar";
import Button from "../button/Button";
import Flex from "../flex/Flex";
import Text from "./../text/Text";

const StyleHeader = styled.header`
    display: flex;
    padding: 3.7rem 0 3.8rem 0;
`

const FirstRow = styled.section`
    display: flex;
    align-items: center;
 
    input {
        margin: 0 auto;
        padding: .25rem 0;
    }

`
const SecondRow = styled.section`

    ul{
        display: flex;
        list-style: none;
    }
    li{
        font-size: 2.4rem;
        white-space: nowrap;
        &:not(:last-of-type){
            margin-right: 2.2rem;
        }
        span{
            font-weight: 700;
        }
    }
  


`

const Header = (props) => {
    const history =useHistory();
    const {
        login, 
        posts, following, 
        followers, 
        firstName, 
        lastName

    } = useSelector(store => store.currentUser.data);

    return (
        <StyleHeader>
            <Flex mr = {'6.7rem'} maxWidth = {'13.4rem'}>
                <Avatar imgUrl = {'img/avatar.jpg'}/>
            </Flex>
            <Flex justify = {'space-between'} height = {'auto'} column>
                <FirstRow flex >
                    <Text fSize = {'2.4rem'}>{login}</Text>
                    <Button onClick = {() => {history.push('/setting')}}  bRadius = {'.5rem'} minWidth = {'18rem'}>Edit profile</Button>
                </FirstRow>
                <SecondRow>
                    <ul >
                        <li>
                           <span>{posts?.length || 0}</span> post
                        </li>
                        <li>
                            <span>{followers?.length || 0}</span> followers
                        </li>
                        <li>
                            <span>{following?.length || 0}</span> following
                        </li>
                    </ul>
                </SecondRow>
                <Text  fSize = {'1.6rem'}>
                    {(firstName && lastName) ? `${firstName} ${lastName}` : ''}
                </Text>
            </Flex>
        </StyleHeader>
    )
}



export default Header;