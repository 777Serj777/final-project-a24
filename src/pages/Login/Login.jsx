import {Link} from 'react-router-dom'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import Form from '../../components/Form/Form'
import Text from '../../components/Text/Text'


const Login = (props) => {

    return (
        <>
            <Title>Sign In</Title>
            <Form>        
                <Input name = 'login' label = 'login' placeholder = 'Enter you login...'/>
                <Input name = 'password' label = 'Password' placeholder = 'Enter you password...'/>
                <Button mt ={3.4}>Sign In</Button>                         
            </Form>
            <Text mt = {4.1}>
                If you not have account you can <Link to = '/registration'>Registration</Link>
            </Text>
               
        </> 
    )
}

export default Login;