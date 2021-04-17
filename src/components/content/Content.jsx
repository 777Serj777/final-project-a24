import styled from "styled-components";

const StyleContent = styled.span`



`

const Content = ({children, ...props}) => {

    
    return (
        <StyleContent {...props}>
            
        </StyleContent>
    )
}


export default Content;