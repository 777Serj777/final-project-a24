import { BrowserRouter, Route, Switch } from 'react-router-dom';
import authRouter from './authRouters';
import Logo from '../../components/logo/Logo';
import Flex from '../../components/flex/Flex';
import Container from '../../components/container/Container';
import Column from '../../components/column/Column';
import Row from '../../components/row/Row';
import Image from '../../components/image/Image';


const Auth = (props) => {
    

    return (
        <Container maxWidth = {'130rem'}>
            <Flex align = {'center'}>
                <Row maxHeight = {'70rem'} >
                    <Column>
                        <Image src = 'img/hipstagram-main-img.png'/>
                    </Column>
                    <Column mCenter>
                        <Logo mt = {8.8} mb = {4.8}/>
                        <BrowserRouter>
                            <Switch>
                                {authRouter.map(({path, component, expect}) => 
                                <Route 
                                    expect = {expect}
                                    key = {path} 
                                    path = {path} 
                                >  
                                    {component}
                                </Route>)}
                            </Switch>
                        </BrowserRouter>
                    </Column>
                </Row>
            </Flex>
        </Container>
    )
}


export default Auth;



/**
 * 
 * name: Serjo
 * password: 1123qwerty1123
 * email: serjo23.ua@gmai.com
 * 
 */