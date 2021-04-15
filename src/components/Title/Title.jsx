import styled from "styled-components";
import {colors} from "./../../style/variables";

const StyleTitle = styled.h2`
    text-align: center;
    font-size: 2.4rem;
    font-weight: 400;
    color: ${({color}) => color || 'inharit'};
    white-space: nowrap;
    margin-left: ${({ml}) => ml || 0};
    margin-right: ${({mr}) => mr || 0};
`

const Title = ({children, ...props}) => {

    return (
        <StyleTitle {...props}>
            {children}
        </StyleTitle>
    )
}


export default Title;