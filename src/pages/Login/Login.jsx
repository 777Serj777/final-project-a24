import {Link} from 'react-router-dom'
import Input from '../../components/styleInput/StyleInput'
import Button from '../../components/button/Button'
import Title from '../../components/title/Title'
import Form from '../../components/form/Form'
import Text from '../../components/text/Text'
import Wrapper from '../../components/wrapper/Wrapper'
import ErrorMessage from '../../components/errorMessage/ErrorMessage'
import Flex from '../../components/flex/Flex'
import { useForm } from '../../utils/from/useForm'
import StyleInput from '../../components/styleInput/StyleInput'
import fetchLogin from './fetchLogin'
import { useDispatch } from 'react-redux'



const Login = (props) => {

   const [errors, handleChange, handleSubmit] = useForm();
   const dispatch = useDispatch();

   const submitClick  = (e) => {
        e.preventDefault();
        const data = handleSubmit(e);
        console.log(data);
        (data) && dispatch(fetchLogin(data));
   }

    return (
        <>
            <Title>Sign In</Title>
            <Form onSubmit = {submitClick}>                  
                <Wrapper mCenter maxWidth = {'35rem'}>
                    <StyleInput label = 'Login'>
                        <input  
                            name = 'login' 
                            placeholder = 'Enter you login...' 
                            onChange = {handleChange}
                        />
                    </StyleInput>  
                    {(errors.login) && <ErrorMessage>{errors.login}</ErrorMessage>}                         
                </Wrapper>                            
                <Wrapper mCenter maxWidth = {'35rem'}>
                    <StyleInput label = 'Password'  >
                        <input  
                            name = 'password' 
                            placeholder = 'Enter you password...' 
                            onChange = {handleChange}
                        />    
                    </StyleInput>
                    {(errors.password) && <ErrorMessage>{errors.password}</ErrorMessage>}
                </Wrapper> 
                <Flex justify = {'center'}>
                    <Button
                        maxWidth = {'20rem'}
                        minHeight = {'5rem'} 
                        bRadius = {'1rem'}
                        type = 'submit' 
                        mt ={'3.4rem'} 
                        value = 'Sign In'
                    />    
                </Flex>                                                        
            </Form>
            <Text mt = {4.1}>
                If you not have account you can <Link to = '/registration'>Registration</Link>
            </Text>
               
        </> 
    )
}


export default Login;
