import styled from 'styled-components';
import {colors} from '../../style/variables'


const StyleInput = styled.input`
    padding-left: 1.7rem;
    outline: none;
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
        <StyleInput {...props} type = {(props.type) ? props.type : "text"}/>         
    )
}

export default Input;