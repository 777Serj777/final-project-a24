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


const Registration = (props) => {

    const [state, error, handleChange] = useForm();

    return (
        <>
            <Title>Sign Up</Title>
            <Form>
            <Wrapper mCenter maxWidth = {'35rem'}>
                    <Label label = 'login'>
                        <Input name = 'login' placeholder = 'Enter you login...'/>
                    </Label> 
                    {(error.login) && <ErrorMessage>{error.login}</ErrorMessage>}                                              
                </Wrapper>                            
                <Wrapper mCenter maxWidth = {'35rem'}>
                    <Label label = 'Password'>
                        <Input  name = 'password' placeholder = 'Enter you password...'/>
                    </Label>
                    {(error.password) && <ErrorMessage>{error.password}</ErrorMessage>}
                </Wrapper>
                <Wrapper mCenter maxWidth = {'35rem'}>
                    <Label label = 'Email'>
                        <Input name = 'email'  placeholder = 'Enter you Email...'/>
                    </Label>
                    {(error.email) && <ErrorMessage>{error.email}</ErrorMessage>}
                </Wrapper>
                <Flex justifyCenter>
                    <Button mt = {4.5}>Sign Up</Button>  
                </Flex>   
            </Form>   
            <Text mt = {4.1}>
                If you have account you can <Link to = '/login'>Login</Link>
            </Text>
        </>  
    )
}


export default Registration;

