import React from 'react';
import styled from 'styled-components';
import Container from './container/Container';
import Navigation from '../navigation/Navigation';
import dashboardRouter from './dashboardRouter'
import { colors } from '../../style/variables';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../../components/loader/loader';

const StyleDashboard = styled.div`

    padding-top: 5.8rem;
    background-color: ${colors.bgMain};
    min-height: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;

    ::-webkit-scrollbar-track {
        background-color:#686767;
        margin-top: 5.8rem;
    }

    ::-webkit-scrollbar-thumb {
        -webkit-border-radius: 0;
        border-radius: 0;
        background-color: ${colors.bgHeader};
    }

    ::-webkit-resizer{      
        width: .4rem;
        height: .4rem;
    }

    ::-webkit-scrollbar{
        width: .4rem;
    }

`

const Dashboard = (props) => {

    const isLoading = useSelector(store => store.ui.isLoading);

   

    return (
        <StyleDashboard>
            <BrowserRouter>
                <Navigation></Navigation>
                <Container bgColor = {'#fff'}>
                        {(isLoading) ? <Loader/> :
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
                    }
                </Container>
            </BrowserRouter>
        </StyleDashboard>
    )
}



export default Dashboard;