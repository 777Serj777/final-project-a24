import styled from "styled-components";
import {colors} from "../../style/variables";
import Button from "../button/Button";
import Flex from "../flex/Flex";
import Search from "../search/Search";
import Title from "../title/Title";

const StyleNavigation = styled.nav`
    position: fixed;
    height: 5.8rem;
    top: 0;
    left:0;
    right: 0;
    background-color: ${colors.bgHeader};
    padding: 0 2.2rem 0 2.4rem;
   
`

const Navigation  = props => {

    return (
        <StyleNavigation>
            <Flex align = {'center'}>
                <Search mr = {'1rem'}></Search>
                <Title ml = {'auto'} mr = {'1rem'} color = {'#fff'}>Hello :)</Title>
                <Button ml = {'auto'} mr = {'1.9rem'} maxWidth = {'3rem'} img = {'img/setting.svg'}></Button>
                <Button maxWidth = {'3rem'} img = {'img/logout.svg'}></Button>
            </Flex>
        </StyleNavigation>   
    )

}


export default Navigation;