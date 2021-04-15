import styled from "styled-components";
import {colors} from '../../style/variables'
 
const StyleText = styled.p`

    text-align: center;
    font-size: ${({fSize}) => fSize || '1.8rem'};
    white-space: nowrap;
    margin-top: ${props => props.mt+'rem' || 0};
    

    a{
        text-decoration: none;
        color: ${colors.linkColor}
    }
   

`

const Text = ({children, ...props}) => {

    return (
        <StyleText {...props}>
            {children}
        </StyleText>
    )
}


export default Text;