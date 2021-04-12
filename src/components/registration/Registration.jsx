import Button from '../button/Button'
import Input from '../input/Input'
import './style.scss'
import {Link} from 'react-router-dom'


const Registration = (props) => {


    return (
        <>
            <form action="#" className = 'registration'>
                <h2 className = 'title'>Sign Up</h2>
                <Input label = 'login' placeholder = 'Enter you login...'/>
                <Input label = 'Email' placeholder = 'Enter you Email...'/>
                <Input label = 'Password' placeholder = 'Enter you password...'/>
                <p className = 'btn'>
                    <Button onClick = {() => {}}>Sign Up</Button>
                </p>
            </form>
            <p className = 'link'>If you have account you can <Link to = '/login'>Login</Link></p>
        </>  
    )
}


export default Registration;

//"id":"60743ef171dd1600174d20b6"