import React from 'react';
import styled from 'styled-components';
import Container from '../../components/container/Container';
import Header from '../../components/header/Header';
import Navigation from '../../components/navigation/Navigation';
import { colors } from '../../style/variables';


const StyleMain = styled.main`
    padding-top: 5.8rem;
    background-color: ${colors.bgMain};
    height: 100%;
`


const Main = (props) => {

    return (
        <StyleMain>
            <Navigation></Navigation>
            <Container mr = {'5.8rem'} ml = {'5.8rem'} bgColor = {'#fff'} maxWidth = {'76.3rem'}>
                <Header></Header>
                
            </Container>
        </StyleMain>
    )
}



export default Main;