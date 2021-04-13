import { BrowserRouter, Route, Switch } from 'react-router-dom';
import authRouter from './authRouters';
import Logo from './../../components/logo/Logo';
import './style.scss';
import Flex from '../../components/Flex/Flex';
import Container from '../../components/Container/Container';
import Column from '../../components/Column/Column';
import Wrapper from '../../components/Wrapper/Wrapper';
import Row from '../../components/Row/Row';
import Image from '../../components/Image/Image';



const Auth = (props) => {

    return (
        <Container maxWidth = {'130rem'}>
            <Flex alignCenter>
                <Row maxHeight = {'70rem'} >
                    <Column>
                        <Image src = 'img/hipstagram-main-img.png'/>
                    </Column>
                    <Column mCenter>
                        <Logo mt = {8.8} mb = {4.8}/>
                        <Wrapper>
                            <BrowserRouter>
                                <Switch>
                                    {authRouter.map(({path, component}) => <Route path = {path}>{component}</Route>)}
                                </Switch>
                            </BrowserRouter>
                        </Wrapper>    
                    </Column>
                </Row>
            </Flex>
        </Container>
    )
}


export default Auth;