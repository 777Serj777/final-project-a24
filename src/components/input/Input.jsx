import styled from 'styled-components';
import Label from '../Label/Label';
import Wrapper from '../Wrapper/Wrapper';
import {colors} from '../../style/variables'
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const StyleInput = styled.input`
    padding-left: 1.7rem;
    outline: none;
    max-width: 35rem;
    min-height: 5rem;
    width: 100%;
    font-size: 1.8rem;
    color: ${colors.inputColorText};
    border: .1rem solid ${colors.inputColorBorder};
    border-radius: 1rem;
    background-color: ${colors.inputColorBg};
`



const Input = ({children, label, error, ...props}) => {
    
    return (
        <Wrapper>
            <Label label = {label}>
                <StyleInput {...props} type = {(props.type) ? props.type : "text"}/> 
            </Label>     
            {(error) && <ErrorMessage>{error.message}</ErrorMessage>}
        </Wrapper>       
    )
}

export default Input;