import React from 'react';
import styled from 'styled-components';
import Container from '../../components/container/Container';
import Navigation from '../../components/navigation/Navigation';
import dashboardRouter from './dashboardRouter'
import { colors } from '../../style/variables';
import { BrowserRouter,  Route, Switch  } from 'react-router-dom';

const StyleDashboard = styled.main`
    padding-top: 5.8rem;
    background-color: ${colors.bgMain};
    height: 100%;
`

const Dashboard = (props) => {

    return (
        <StyleDashboard>
            <BrowserRouter>
                <Navigation></Navigation>
                <Container mr = {'5.8rem'} ml = {'5.8rem'} bgColor = {'#fff'} maxWidth = {'76.3rem'}>
                        <Switch>
                            {dashboardRouter.map(({path, component, expect}) => 
                            <Route 
                                expect = {expect} 
                                key = {path}  
                                path = {path}
                            >
                                {component}
                            </Route>)}
                        </Switch>
                </Container>
            </BrowserRouter>
        </StyleDashboard>
    )
}



export default Dashboard;