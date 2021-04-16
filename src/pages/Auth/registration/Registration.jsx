import {Link} from 'react-router-dom'
import Button from '../../../components/button/Button'
import Title from '../../../components/title/Title'
import Form from '../../../components/form/Form'
import Text from '../../../components/text/Text'
import Flex from '../../../components/flex/Flex'
import { useForm } from '../../../utils/from/useForm'
import {fetchRegistration} from './fetchRegistration'
import { useDispatch } from 'react-redux'
import Input from '../../../components/Input/Input'


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
                <Input
                    errors = {errors}
                    handleChange = {handleChange}
                    name = {'login'}
                    label = {'Login'}
                />
                <Input
                    errors = {errors}
                    handleChange = {handleChange}
                    name = {'password'}
                    label = {'Password'}
                />
                <Input
                    errors = {errors}
                    handleChange = {handleChange}
                    name = {'email'}
                    label = {'Email'}
                />
                <Flex justify = {'center'}>
                    <Button 
                        maxWidth = {'20rem'}
                        minHeight = {'5rem'}
                        bRadius = {'1rem'} 
                        type = 'submit' 
                        mt = {'4.5rem'} 
                        value = 'Sign In' 
                    />  
                </Flex>   
            </Form>   
            <Text tAlign = {'center'} mt = {4.1}>
                If you have account you can <Link to = '/login'>Login</Link>
            </Text>
        </>  
    )
}

export default Registration;

