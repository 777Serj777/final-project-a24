import styled from "styled-components";
import {colors} from './../../style/variables'


export const StyleWrapper = styled.p`

   
`
export const StyleMessageErr = styled.span`
        color: red;
        margin-left: 1.5rem;
`

export const StyleInput = styled.input`
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

export const Stylelabel = styled.label`

    font-size: 1.4rem;

    span{
        display: block;
        margin-bottom: .7rem;
    }
    
`