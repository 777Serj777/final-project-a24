import {Link} from 'react-router-dom'
import Input from '../../components/input/Input'
import Button from '../../components/button/Button'
import Title from '../../components/title/Title'
import Form from '../../components/form/Form'
import Text from '../../components/text/Text'
import Wrapper from '../../components/wrapper/Wrapper'
import Label from '../../components/label/Label'
import ErrorMessage from '../../components/errorMessage/ErrorMessage'
import Flex from '../../components/flex/Flex'
import { useForm } from '../../utils/useForm'




const Login = (props) => {

   const [state, error, handleChange] = useForm();

    return (
        <>
            <Title>Sign In</Title>
            <Form>                  
                <Wrapper mCenter maxWidth = {'35rem'}>
                    <Label label = 'login'>
                        <Input  name = 'login' placeholder = 'Enter you login...' onChange = {handleChange}/>   
                    </Label> 
                    {(error.login) && <ErrorMessage>{error.login}</ErrorMessage>}                         
                </Wrapper>                            
                <Wrapper mCenter maxWidth = {'35rem'}>
                    <Label label = 'Password'>
                        <Input  name = 'password' placeholder = 'Enter you password...' onChange = {handleChange}/>
                    </Label>
                    {(error.passworad) && <ErrorMessage>{error.passworad}</ErrorMessage>}
                </Wrapper> 
                <Flex justifyCenter>
                    <Button mt ={3.4}>Sign In</Button>    
                </Flex>                                                        
            </Form>
            <Text mt = {4.1}>
                If you not have account you can <Link to = '/registration'>Registration</Link>
            </Text>
               
        </> 
    )
}


export default Login;
