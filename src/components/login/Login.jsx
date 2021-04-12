import Button from '../button/Button'
import Input from '../input/Input'
import './style.scss'
import {Link} from 'react-router-dom'


const Login = (props) => {


    return (
        <>
            <form action="#" className = 'login'>
                <h2 className = 'title'>Sign In</h2>
                <Input label = 'login' placeholder = 'Enter you login...'/>
                <Input label = 'Password' placeholder = 'Enter you password...'/>
                <p className = 'btn'>
                    <Button>Sign In</Button>
                </p>
            </form>
            <p className = 'link'>If you not have account you can <Link to = '/registration'>Registration</Link></p>
        </> 
    )
}

export default Login;