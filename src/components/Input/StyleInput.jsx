import styled from 'styled-components';
import {colors} from '../../style/variables'

const StyleLabel = styled.label`
    position: relative;
    font-size: 1.4rem;

    span{
        display: block;
        margin-bottom: .7rem;
    }

    input {
        padding-left: 1.7rem;
        outline: none;
        min-height: 5rem;
        width: 100%;
        font-size: 1.8rem;
        color: ${colors.inputColorText};
        border: .1rem solid ${colors.inputColorBorder};
        border-radius: 1rem;
        background-color: ${colors.inputColorBg};
    }

`

const StyleInput = ({children, label, ...props}) => {
    
    return (
        <StyleLabel {...props}>
            {(label) && <span>{label}</span>}
            {children}
        </StyleLabel>        
    )
}

export default StyleInput;