import styled from "styled-components";
import {colors} from './../../style/variables'


export const StyleButton = styled.input`
    padding: 1.1rem 5.9rem;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 1rem;
    background-color: ${colors.buttonColor};
    color: ${colors.buttonColorText};
    font-family: 'Roboto', sans-serif;
    font-size: 2.4rem;
    margin-top: ${props => props.mt+'rem' || 0}
`


