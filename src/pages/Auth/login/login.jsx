import {Link} from 'react-router-dom'
import Button from '../../../components/button/Button'
import Title from '../../../components/title/Title'
import Form from '../../../components/form/Form'
import Text from '../../../components/text/Text'
import Flex from '../../../components/flex/Flex'
import { useForm } from '../../../utils/from/useForm'
import fetchLogin from './fetchLogin'
import { useDispatch } from 'react-redux'
import Input from '../../../components/Input/Input'



const Login = (props) => {

   const [errors, handleChange, handleSubmit] = useForm();
   const dispatch = useDispatch();
   
   
   const submitClick  = (e) => {
        e.preventDefault();
        const data = handleSubmit(e);
        (data) && dispatch(fetchLogin(data));
   }

    return (
        <>
            <Title>Sign In</Title>
            <Form onSubmit = {submitClick}>                  
                <Input
                    errors = {errors}
                    handleChange = {handleChange}
                    name = 'login'
                    label = 'Login'
                    
                />                          
                <Input
                    errors = {errors}
                    handleChange = {handleChange}
                    name = 'password'
                    label = 'Password'
                />
                <Flex justify = 'center'>
                    <Button
                        minWidth = '20rem'
                        minHeight = '5rem'
                        bRadius = '1rem'
                        type = 'submit' 
                        mt ='3.4rem'
                        value = 'Sign In'
                    />    
                </Flex>                                                        
            </Form>
            <Text tAlign = 'center' mt = '4.1rem'>
                If you not have account you can <Link to = '/registration'>Registration</Link>
            </Text>           
        </> 
    )
}

export default Login;
