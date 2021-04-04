import Login from '../login/Login';
import Registration from '../registration/Registration';
import Wrapper from '../wrapper/Wrapper';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './style.scss';

const Logo = () => {
    return (
        <div className = 'logo'>
            <img className = 'logo__img' src="img/logo.png"/>
            <h1 className = 'logo__name'>HIPSTAGRAM</h1>
        </div>
    )
}

const Authorization = (props) => {

    return (
       <main className = 'main'>
           <div className = 'authorization'>
                <div className = 'authorization__column-left'>
                    <img src="img/hipstagram-main-img.png"/>
                </div>
                <div className = 'authorization__column-right'>
                    <Logo/>
                    <Wrapper className = 'wrapper__form'>
                        <BrowserRouter> 
                            <Switch>
                                <Route path = '/registration' component = {Registration}/>
                                <Route path = '/login' component = {Login}/>
                            </Switch> 
                        </BrowserRouter>                
                    </Wrapper>                  
                </div>
           </div>
       </main>
    )
}



export default Authorization;