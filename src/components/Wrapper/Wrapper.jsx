import styled from "styled-components";

const StyleWraper = styled.p`
    max-width: ${props => props.maxWidth || '100%'};
    width: ${props => props.width || '100%'};
    margin: ${props => (props.mCenter && '0 auto') || 0};

`

const Wrapper = ({children, ...props}) => {
    return (
        <StyleWraper {...props}>
            {children}
        </StyleWraper>
    )
}


export default Wrapper;