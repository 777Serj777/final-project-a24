import {Link} from 'react-router-dom'
import Button from '../../components/button/Button'
import Title from '../../components/title/Title'
import Form from '../../components/form/Form'
import Text from '../../components/text/Text'
import Wrapper from '../../components/wrapper/Wrapper'
import ErrorMessage from '../../components/errorMessage/ErrorMessage'
import Flex from '../../components/flex/Flex'
import { useForm } from '../../utils/from/useForm'
import {fetchRegistration} from './fetchRegistration'
import { useDispatch } from 'react-redux'
import StyleInput from '../../components/styleInput/StyleInput'


const Registration = (props) => {

    const [errors, handleChange, handleSubmit] = useForm();
    const dispatch = useDispatch();

    const submitClick = (e) => {
        e.preventDefault();
        const data = handleSubmit(e);
        (data) &&  dispatch(fetchRegistration(data));
    }
 
    return (
        <>
            <Title>Sign Up</Title>
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
                <Wrapper mCenter maxWidth = {'35rem'}>
                    <StyleInput label = 'Email'>
                        <input                    
                            name = 'email'  
                            placeholder = 'Enter you Email...' 
                            onChange = {handleChange}
                        />
                    </StyleInput>
                    {(errors.email) && <ErrorMessage>{errors.email}</ErrorMessage>}
                </Wrapper>
                <Flex justifyCenter>
                    <Button type = 'submit' mt = {4.5} value = 'Sign In' />  
                </Flex>   
            </Form>   
            <Text mt = {4.1}>
                If you have account you can <Link to = '/login'>Login</Link>
            </Text>
        </>  
    )
}

export default Registration;

/**
 * 
 * name: Serjo
 * password: 1123qwerty1123
 * email: serjo23.ua@gmai.com
 * 
 */