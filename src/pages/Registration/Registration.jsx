import {Link} from 'react-router-dom'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Title from '../../components/Title/Title'
import Form from '../../components/Form/Form'
import Text from '../../components/Text/Text'


const Registration = (props) => {

    return (
        <>
            <Title>Sign Up</Title>
            <Form>
                <Input name = 'login' label = 'login' placeholder = 'Enter you login...'/>
                <Input name = 'email' label = 'Email' placeholder = 'Enter you Email...'/>
                <Input name = 'password' label = 'Password' placeholder = 'Enter you password...'/>
                <Button mt = {4.5}>Sign Up</Button>     
            </Form>   
            <Text mt = {4.1}>
                If you have account you can <Link to = '/login'>Login</Link>
            </Text>
        </>  
    )
}


export default Registration;

