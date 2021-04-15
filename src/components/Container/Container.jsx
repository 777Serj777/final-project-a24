import styled from "styled-components";

const StyleContainer = styled.div`
   
    max-width: ${props => props.maxWidth || '100%'};
    max-height: ${props => props.maxHeight || '100%'};
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    background-color: ${({bgColor}) => bgColor || 'inharit'};
    padding-left: ${({ml}) => ml || 0};
    padding-right: ${({mr}) => mr || 0};
    margin: 0 auto;

`

const Container = ({children, ...props}) => {


    return (
        <StyleContainer {...props}>
            {children}
        </StyleContainer>
    )
}


export default Container;