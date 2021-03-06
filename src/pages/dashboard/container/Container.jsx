import styled from "styled-components";

const StyleContainer = styled.div`
    
    position: relative;
    max-width: 76.3rem;
    min-height: 100%;
    background-color: ${({bgColor}) => bgColor || ''};
    border: ${({border}) => border || ''};
    padding-left: 5.8rem;
    padding-right: 5.8rem;
    margin: 0 auto;
`

const Container = ({children, ...props}) => {

    return (
        <StyleContainer className = 'container' {...props}>
            {children}
        </StyleContainer>
    )
}


export default Container;