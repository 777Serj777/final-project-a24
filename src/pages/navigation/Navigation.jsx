import styled from "styled-components";
import {colors} from "../../style/variables";
import Button from "../../components/button/Button";
import Flex from "../../components/flex/Flex";
import Search from "./search/Search";
import Title from "../../components/title/Title";

const StyleNavigation = styled.nav`
    position: fixed;
    height: 5.8rem;
    top: 0;
    left:0;
    right: 0;
    background-color: ${colors.bgHeader};
    padding: 0 2.2rem 0 2.4rem; 
    z-index: 1;
`

const Navigation  = props => {


    return (
        <StyleNavigation>
            <Flex align = {'center'}>
                <Search mr = {'1rem'}></Search>
                <Title ml = {'auto'} mr = {'1rem'} color = {'#fff'}>Hello :)</Title>
                <Button ml = {'auto'} mr = {'1.9rem'} minWidth = {'3rem'} img = {'img/setting.svg'}></Button>
                <Button minWidth = {'3rem'} img = {'img/logout.svg'}></Button>
            </Flex>
        </StyleNavigation>   
    )

}


export default Navigation;