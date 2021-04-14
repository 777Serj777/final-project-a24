import {Link} from 'react-router-dom'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import Title from '../../components/title/Title'
import Form from '../../components/form/Form'
import Text from '../../components/text/Text'
import Wrapper from '../../components/wrapper/Wrapper'
import ErrorMessage from '../../components/errorMessage/ErrorMessage'
import Label from '../../components/label/Label'
import Flex from '../../components/flex/Flex'
import { useForm } from '../../utils/useForm'

const colbackSubmit = () => {
    console.log(2);
}

const Registration = (props) => {

    const [state, errors, handleChange, handleSubmit] = useForm(colbackSubmit);

   
    return (
        <>
            <Title>Sign Up</Title>
            <Form onSubmit = {handleSubmit}>
                <Wrapper mCenter maxWidth = {'35rem'}>
                    <Label label = 'login'>
                        <Input 
                            name = 'login' 
                            placeholder = 'Enter you login...' 
                            onChange = {handleChange}
                        />
                    </Label> 
                    {(errors.login) && <ErrorMessage>{errors.login}</ErrorMessage>}                                              
                </Wrapper>                            
                <Wrapper mCenter maxWidth = {'35rem'}>
                    <Label label = 'Password'>
                        <Input  
                            name = 'password' 
                            placeholder = 'Enter you password...' 
                            onChange = {handleChange}
                        />
                    </Label>
                    {(errors.password) && <ErrorMessage>{errors.password}</ErrorMessage>}
                </Wrapper>
                <Wrapper mCenter maxWidth = {'35rem'}>
                    <Label label = 'Email'>
                        <Input 
                            name = 'email'  
                            placeholder = 'Enter you Email...' 
                            onChange = {handleChange}
                        />
                    </Label>
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

