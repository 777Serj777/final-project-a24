import styled from "styled-components";
import Avatar from "../Avatar/Avatar";
import Button from "../button/Button";
import Flex from "../flex/Flex";
import List from "../list/List";
import Section from "../section/Section";
import Text from "./../text/Text";

const StyleHeader = styled.header`
    display: flex;
    padding: 3.7rem 0 3.8rem 0;

`



const Header = (props) => {

    return (
        <StyleHeader>
            <Flex>
                <Avatar imgUrl = {'img/avatar.jpg'}/>
            </Flex>
            <Flex justify = {'space-between'}   height = {'auto'} column>
                <Section flex >
                    <Text fSize = {'2.4rem'}>SerJo</Text>
                    <Button bRadius = {'.5rem'} maxWidth = {'18rem'}>edit profile</Button>
                </Section>
                <Section>
                    <List flex fSize = {'2.4rem'}>
                        <li>
                            15 post
                        </li>
                        <li>
                            1 followers
                        </li>
                        <li>
                            2 following
                        </li>
                    </List>
                </Section>
                <Section>
                    <Text fSize = {'1.6rem'}>
                        Kud Serhii
                    </Text>
                </Section>
            </Flex>
        </StyleHeader>
    )
}



export default Header;