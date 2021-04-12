import { BrowserRouter, Switch } from 'react-router-dom';
import './style.scss';

const Logo = () => {
    return (
        <div className = 'logo'>
            <img className = 'logo__img' src="img/logo.png"/>
            <h1 className = 'logo__name'>HIPSTAGRAM</h1>
        </div>
    )
}

const WrappForForm = ({children}) => {

    return (
       <main className = 'main'>
           <div className = 'wrapper'>
                <div className = 'wrapper__column-left'>
                    <img src="img/hipstagram-main-img.png"/>
                </div>
                <div className = 'wrapper__column-right'>
                    <Logo/>               
                    <div className = 'wrapper__form'>
                        <BrowserRouter>
                            <Switch>
                                {children}
                            </Switch>
                        </BrowserRouter>
                    </div>                               
                </div>
           </div>
       </main>
    )
}



export default WrappForForm;